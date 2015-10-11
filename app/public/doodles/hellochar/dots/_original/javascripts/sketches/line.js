(function () {

    // cheap mobile detection
    var NUM_PARTICLES = window.queryParams.p ? parseInt(window.queryParams.p) :
                        (window.screen.width > 1024) ? 15000 : 5000;
    var SIMULATION_SPEED = 3;
    var GRAVITY_CONSTANT = 100;
    // speed becomes this percentage of its original speed every second
    var PULLING_DRAG_CONSTANT = 0.96075095702;
    var INERTIAL_DRAG_CONSTANT = 0.73913643334;

    function createAudioGroup(audioContext) {
        var backgroundAudio = $("<audio autoplay loop>")
                                .append('<source src="audio/line_background.ogg" type="audio/ogg">')
                                .append('<source src="audio/line_background.mp3" type="audio/mp3">');

        var sourceNode = audioContext.createMediaElementSource(backgroundAudio[0]);
        window.sourceNode = sourceNode;
        $("body").append(backgroundAudio);

        var backgroundAudioGain = audioContext.createGain();
        backgroundAudioGain.gain.value = 0.5;
        sourceNode.connect(backgroundAudioGain);
        backgroundAudioGain.connect(audioContext.gain);

        // white noise
        var noise = (function() {
            var node = audioContext.createBufferSource()
            , buffer = audioContext.createBuffer(1, audioContext.sampleRate * 5, audioContext.sampleRate)
            , data = buffer.getChannelData(0);
            for (var i = 0; i < buffer.length; i++) {
                data[i] = Math.random();
            }
            node.buffer = buffer;
            node.loop = true;
            node.start(0);
            return node;
        })();

        // // pink noise from http://noisehack.com/generate-noise-web-audio-api/
        // var noise = (function() {
        //     var bufferSize = 4096;
        //     var b0, b1, b2, b3, b4, b5, b6;
        //     b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
        //     var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
        //     node.onaudioprocess = function(e) {
        //         var output = e.outputBuffer.getChannelData(0);
        //         for (var i = 0; i < bufferSize; i++) {
        //             var white = Math.random() * 2 - 1;
        //             b0 = 0.99886 * b0 + white * 0.0555179;
        //             b1 = 0.99332 * b1 + white * 0.0750759;
        //             b2 = 0.96900 * b2 + white * 0.1538520;
        //             b3 = 0.86650 * b3 + white * 0.3104856;
        //             b4 = 0.55000 * b4 + white * 0.5329522;
        //             b5 = -0.7616 * b5 - white * 0.0168980;
        //             output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        //             output[i] *= 0.11; // (roughly) compensate for gain
        //             b6 = white * 0.115926;
        //         }
        //     }
        //     return node;
        // })();

        var noiseSourceGain = audioContext.createGain();
        noiseSourceGain.gain.value = 0;
        noise.connect(noiseSourceGain);

        var noiseFilter = audioContext.createBiquadFilter();
        noiseFilter.type = "lowpass";
        noiseFilter.frequency.value = 0;
        noiseFilter.Q.value = 1.0;
        noiseSourceGain.connect(noiseFilter);

        var noiseShelf = audioContext.createBiquadFilter();
        noiseShelf.type = "lowshelf";
        noiseShelf.frequency.value = 2200;
        noiseShelf.gain.value = 8;
        noiseFilter.connect(noiseShelf);

        var noiseGain = audioContext.createGain();
        noiseGain.gain.value = 1.0;
        noiseShelf.connect(noiseGain);

        var BASE_FREQUENCY = 320;
        function detuned(freq, centsOffset) {
            return freq * Math.pow(2, centsOffset / 1200);
        }
        function semitone(freq, semitoneOffset) {
            return detuned(freq, semitoneOffset * 100);
        }
        var source1 = (function() {
            var node = audioContext.createOscillator();
            node.frequency.value = detuned(BASE_FREQUENCY / 2, 2);
            node.type = "square";
            node.start(0);

            var gain = audioContext.createGain();
            gain.gain.value = 0.30;
            node.connect(gain);

            return gain;
        })();
        var source2 = (function() {
            var node = audioContext.createOscillator();
            node.frequency.value = BASE_FREQUENCY;
            node.type = "sawtooth";
            node.start(0);

            var gain = audioContext.createGain();
            gain.gain.value = 0.30;
            node.connect(gain);

            return gain;
        })();

        var sourceLow = (function() {
            var node = audioContext.createOscillator();
            node.frequency.value = BASE_FREQUENCY / 4;
            node.type = "sawtooth";
            node.start(0);

            var gain = audioContext.createGain();
            gain.gain.value = 0.60;
            node.connect(gain);

            return gain;
        })();

        function makeChordSource(BASE_FREQUENCY) {
            var base = audioContext.createOscillator();
            base.frequency.value = BASE_FREQUENCY;
            base.start(0);

            var octave = audioContext.createOscillator();
            octave.frequency.value = semitone(BASE_FREQUENCY, 12);
            octave.type = "sawtooth";
            octave.start(0);

            var fifth = audioContext.createOscillator();
            fifth.frequency.value = semitone(BASE_FREQUENCY, 12 + 7);
            fifth.type = "sawtooth";
            fifth.start(0);

            var octave2 = audioContext.createOscillator();
            octave2.frequency.value = semitone(BASE_FREQUENCY, 24);
            octave2.type = "sawtooth";
            octave2.start(0);

            var fourth = audioContext.createOscillator();
            fourth.frequency.value = semitone(BASE_FREQUENCY, 24 + 4);
            fourth.start(0);

            var gain = audioContext.createGain();
            gain.gain.value = 0.0;
            base.connect(gain);
            octave.connect(gain);
            fifth.connect(gain);
            octave2.connect(gain);
            fourth.connect(gain);

            return gain;
        }
        var chordSource = makeChordSource(BASE_FREQUENCY);
        var chordHigh = makeChordSource(BASE_FREQUENCY * 8);

        var sourceGain = audioContext.createGain();
        sourceGain.gain.value = 0.0;

        var sourceLfo = audioContext.createOscillator();
        sourceLfo.frequency.value = 8.66;
        sourceLfo.start(0);

        var lfoGain = audioContext.createGain();
        lfoGain.gain.value = 0;

        sourceLfo.connect(lfoGain);

        var filter = audioContext.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 0;
        filter.Q.value = 2.18;

        var filter2 = audioContext.createBiquadFilter();
        filter2.type = "bandpass";
        filter2.frequency.value = 0;
        filter2.Q.value = 2.18;

        var filterGain = audioContext.createGain();
        filterGain.gain.value = 0.4;

        chordSource.connect(sourceGain);
        source1.connect(sourceGain);
        source2.connect(sourceGain);
        sourceLow.connect(sourceGain);
        chordHigh.connect(filter);
        sourceGain.connect(filter);

        lfoGain.connect(filter.frequency);
        lfoGain.connect(filter2.frequency);
        filter.connect(filter2);
        filter2.connect(filterGain);

        var audioGain = audioContext.createGain();
        audioGain.gain.value = 1.0;

        noiseGain.connect(audioGain);
        filterGain.connect(audioGain);

        var analyser = audioContext.createAnalyser();
        audioGain.connect(analyser);

        var compressor = audioContext.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 12;
        compressor.ratio.value = 2;
        analyser.connect(compressor);

        var highAttenuation = audioContext.createBiquadFilter();
        highAttenuation.type = "highshelf";
        highAttenuation.frequency.value = BASE_FREQUENCY * 4;
        highAttenuation.gain.value = -6;
        compressor.connect(highAttenuation);

        var highAttenuation2 = audioContext.createBiquadFilter();
        highAttenuation2.type = "highshelf";
        highAttenuation2.frequency.value = BASE_FREQUENCY * 8;
        highAttenuation2.gain.value = -6;
        highAttenuation.connect(highAttenuation2);

        highAttenuation2.connect(audioContext.gain);

        return {
            analyser: analyser,
            chordGain: chordSource,
            sourceGain: sourceGain,
            sourceLfo: sourceLfo,
            lfoGain: lfoGain,
            filter: filter,
            filter2: filter2,
            filterGain: filterGain,
            setFrequency: function(freq) {
                filter.frequency.value = freq;
                filter2.frequency.value = freq;
                lfoGain.gain.value = freq * .06;
            },
            setNoiseFrequency: function(freq) {
                noiseFilter.frequency.value = freq;
            },
            setVolume: function(volume) {
                sourceGain.gain.value = volume / 9;
                noiseSourceGain.gain.value = volume * 0.05;
                chordSource.gain.value = 0.05;
                chordHigh.gain.value = volume / 30;
            },
            setBackgroundVolume: function(volume) {
                backgroundAudioGain.gain.value = volume;
            }
        };
    }

    function reset() {
        for (var i = 0; i < NUM_PARTICLES; i++) {
            particles[i].dx = 0;
            particles[i].dy = 0;
        }
        returnToStartPower = 0.01;
    }

    var attractor = null;
    var audioContext;
    var audioGroup;
    var canvas;
    var dragConstant = INERTIAL_DRAG_CONSTANT;
    var particles = [];
    var returnToStartPower = 0;

    var mouseX = 0, mouseY = 0;

    // threejs stuff
    var camera;
    var composer;
    var filter;
    var geometry;
    var pointCloud;
    var renderer;
    var scene;

    function init(_renderer, _audioContext) {
        audioContext = _audioContext;
        audioGroup = createAudioGroup(audioContext);
        canvas = _renderer.domElement;

        scene = new THREE.Scene();
        renderer = _renderer;
        camera = new THREE.OrthographicCamera(0, canvas.width, 0, canvas.height, 1, 1000);
        camera.position.z = 500;

        for(var i = 0; i < NUM_PARTICLES; i++) {
            particles[i] = {
                x: i * canvas.width / NUM_PARTICLES,
                y: canvas.height / 2 + (i % 3) - 1,
                dx: 0,
                dy: 0,
                vertex: null
            };
        }
        instantiatePointCloudAndGeometry();

        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        filter = new THREE.ShaderPass(GravityShader);
        filter.uniforms['iResolution'].value = new THREE.Vector2(canvas.width, canvas.height);
        if (window.queryParams.gamma) {
            filter.uniforms['gamma'].value = parseFloat(window.queryParams.gamma);
        }
        filter.renderToScreen = true;
        composer.addPass(filter);
    }

    function animate(millisElapsed) {
        var timeStep = millisElapsed / 1000 * SIMULATION_SPEED;
        if (returnToStartPower > 0 && returnToStartPower < 1) {
            returnToStartPower *= 1.01;
        }
        var sizeScaledGravityConstant = GRAVITY_CONSTANT * Math.min(Math.pow(2, canvas.width / 836 - 1), 1);

        var averageX = 0, averageY = 0;
        var averageVel2 = 0;
        for (var i = 0; i < NUM_PARTICLES; i++) {
            var particle = particles[i];
            if (attractor != null) {
                var dx = attractor.x - particle.x;
                var dy = attractor.y - particle.y;
                var length2 = Math.sqrt(dx*dx + dy*dy);
                var forceX = sizeScaledGravityConstant * dx / length2;
                var forceY = sizeScaledGravityConstant * dy / length2;

                particle.dx += forceX * timeStep;
                particle.dy += forceY * timeStep;
            }
            particle.dx *= Math.pow(dragConstant, timeStep);
            particle.dy *= Math.pow(dragConstant, timeStep);

            particle.x += particle.dx * timeStep;
            particle.y += particle.dy * timeStep;

            var wantedX = i * canvas.width / NUM_PARTICLES;
            var wantedY = canvas.height / 2;
            if (returnToStartPower > 0) {
                particle.x -= (particle.x - wantedX) * returnToStartPower;
                particle.y -= (particle.y - wantedY) * returnToStartPower;
            }

            particle.vertex.x = particle.x;
            particle.vertex.y = particle.y;
            averageX += particle.x;
            averageY += particle.y;
            averageVel2 += particle.dx * particle.dx + particle.dy * particle.dy;
        }
        averageX /= NUM_PARTICLES;
        averageY /= NUM_PARTICLES;
        averageVel2 /= NUM_PARTICLES;
        var varianceX2 = 0;
        var varianceY2 = 0;
        var varianceVel22 = 0;
        var entropy = 0;
        var numLeft = 0, numRight = 0;
        for (var i = 0; i < NUM_PARTICLES; i++) {
            var particle = particles[i];
            var dx2 = Math.pow(particle.x - averageX, 2),
                dy2 = Math.pow(particle.y - averageY, 2);
            varianceX2 += dx2;
            varianceY2 += dy2;
            varianceVel22 += Math.pow(particle.dx * particle.dx + particle.dy * particle.dy - averageVel2, 2);
            var length = Math.sqrt(dx2 + dy2);
            entropy += length * Math.log(length);
            if (particle.x < averageX) {
                numLeft++;
            } else {
                numRight++;
            }
        }
        entropy /= NUM_PARTICLES;
        varianceX2 /= NUM_PARTICLES;
        varianceY2 /= NUM_PARTICLES;
        varianceVel22 /= NUM_PARTICLES;

        var varianceX = Math.sqrt(varianceX2);
        var varianceY = Math.sqrt(varianceY2);
        var varianceVel2 = Math.sqrt(varianceVel22);

        var varianceLength = Math.sqrt(varianceX2 + varianceY2);
        var varianceVel = Math.sqrt(varianceVel2);
        var averageVel = Math.sqrt(averageVel2);

        // flatRatio = 1 -> perfectly circular
        // flatRatio is high (possibly Infinity) -> extremely horizontally flat
        // flatRatio is low (near 0) -> vertically thin
        var flatRatio = varianceX / varianceY;

        // in reset formation, the varianceLength = (sqrt(1/2) - 1/2) * magicNumber * canvasWidth
        // magicNumber is experimentally found to be 1.3938
        // AKA varianceLength = 0.28866 * canvasWidth
        var normalizedVarianceLength = varianceLength / (0.28866 * canvas.width);
        var normalizedAverageVel = averageVel / (canvas.width);
        var normalizedEntropy = entropy / (canvas.width * 1.383870349);

        audioGroup.sourceLfo.frequency.value = flatRatio;
        audioGroup.setFrequency(222 / normalizedEntropy);

        var noiseFreq = 2000 * (Math.pow(8, normalizedVarianceLength) / 8);
        audioGroup.setNoiseFrequency(noiseFreq);

        var groupedUpness = Math.sqrt(averageVel / varianceLength);
        audioGroup.setVolume(Math.max(groupedUpness - 0.05, 0));

        var mouseDistanceToCenter = Math.sqrt(Math.pow(mouseX - averageX, 2) + Math.pow(mouseY - averageY, 2));
        var normalizedMouseDistanceToCenter = mouseDistanceToCenter / Math.sqrt(canvas.width * canvas.height);
        var backgroundVolume = 0.33 / (1 + normalizedMouseDistanceToCenter * normalizedMouseDistanceToCenter);
        audioGroup.setBackgroundVolume(backgroundVolume);

        filter.uniforms['iGlobalTime'].value = audioContext.currentTime / 1;
        filter.uniforms['G'].value = (groupedUpness + 0.05) * 2000;
        filter.uniforms['iMouseFactor'].value = (1/15) / (groupedUpness + 1);
        // filter.uniforms['iMouse'].value = new THREE.Vector2(averageX, canvas.height - averageY);

        geometry.verticesNeedUpdate = true;
        composer.render();
    }

    function touchstart(event) {
        // prevent emulated mouse events from occuring
        event.preventDefault();
        var canvasOffset = $(canvas).offset();
        var touch = event.originalEvent.touches[0];
        var touchX = touch.pageX - canvasOffset.left;
        var touchY = touch.pageY - canvasOffset.top;
        // offset the touchY by its radius so the attractor is above the thumb
        touchY -= 100;

        mouseX = touchX;
        mouseY = touchY;
        createAttractor(touchX, touchY);
    }

    function touchmove(event) {
        var canvasOffset = $(canvas).offset();
        var touch = event.originalEvent.touches[0];
        var touchX = touch.pageX - canvasOffset.left;
        var touchY = touch.pageY - canvasOffset.top;
        touchY -= 100;

        mouseX = touchX;
        mouseY = touchY;
        moveAttractor(touchX, touchY);
    }

    function touchend(event) {
        removeAttractor();
    }

    function mousedown(event) {
        if (event.which === 1) {
            mouseX = event.offsetX == undefined ? event.originalEvent.layerX : event.offsetX;
            mouseY = event.offsetY == undefined ? event.originalEvent.layerY : event.offsetY;
            createAttractor(mouseX, mouseY);
        }
    }

    function mousemove(event) {
        mouseX = event.offsetX == undefined ? event.originalEvent.layerX : event.offsetX;
        mouseY = event.offsetY == undefined ? event.originalEvent.layerY : event.offsetY;
        moveAttractor(mouseX, mouseY);
    }

    function mouseup(event) {
        if (event.which === 1) {
            removeAttractor();
        }
    }

    function createAttractor(x, y) {
        attractor = { x: x, y : y };
        filter.uniforms['iMouse'].value.set(x, renderer.domElement.height - y);
        dragConstant = PULLING_DRAG_CONSTANT;
        returnToStartPower = 0;
    }

    function moveAttractor(x, y) {
        filter.uniforms['iMouse'].value.set(x, renderer.domElement.height - y);
        if (attractor != null) {
            attractor.x = x;
            attractor.y = y;
        }
    }

    function removeAttractor() {
        dragConstant = INERTIAL_DRAG_CONSTANT;
        attractor = null;
    }

    function resize(width, height) {
        camera.right = width;
        camera.bottom = height;
        camera.updateProjectionMatrix();

        filter.uniforms['iResolution'].value = new THREE.Vector2(width, height);
    }

    function instantiatePointCloudAndGeometry() {
        if (pointCloud != null) {
            scene.remove(pointCloud);
        }
        geometry = new THREE.Geometry();
        for(var i = 0; i < NUM_PARTICLES; i++) {
            var particle = particles[i];
            var vertex = new THREE.Vector3(particle.x, particle.y, 0);
            geometry.vertices.push(vertex);
            particles[i].vertex = vertex;
        }

        var starTexture = THREE.ImageUtils.loadTexture("images/star.png");
        starTexture.minFilter = THREE.NearestFilter;
        var material = new THREE.PointCloudMaterial({
            size: 9,
            sizeAttenuation: false,
            map: starTexture,
            opacity: 0.2,
            transparent: true
        });
        pointCloud = new THREE.PointCloud(geometry, material);
        scene.add(pointCloud);
    }

    var sketch2 = {
        id: "line",
        init: init,
        instructions: "Click, drag, look, listen.",
        animate: animate,
        mousedown: mousedown,
        mousemove: mousemove,
        mouseup: mouseup,
        resize: resize,
        touchstart: touchstart,
        touchmove: touchmove,
        touchend: touchend
    };
    window.registerSketch(sketch2);
})();
