(function () {
    var NUM_FREE_PARTICLES;
    var SIMULATION_SPEED = 3;
    var GRAVITY_CONSTANT = 100;
    var STATIONARY_CONSTANT = 0.01;
    // speed becomes this percentage of its original speed every second
    var PULLING_DRAG_CONSTANT = 0.96075095702;
    var INERTIAL_DRAG_CONSTANT = 0.23913643334;
    var EXTENT = 10;
    var GRID_SIZE = window.queryParams.gridSize ? parseInt(window.queryParams.gridSize) : 7;

    function createAudioGroup(audioContext) {

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
        var noiseGain = audioContext.createGain();
        noiseGain.gain.value = 0;
        noise.connect(noiseGain);


        // // pink noise from http://noisehack.com/generate-noise-web-audio-api/
        // var source = (function() {
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

        var BASE_FREQUENCY = 164.82;
        function detuned(freq, centsOffset) {
            return freq * Math.pow(2, centsOffset / 1200);
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

        var sourceGain = audioContext.createGain();
        sourceGain.gain.value = 0.0;

        var lfo = audioContext.createOscillator();
        lfo.frequency.value = 8.66;
        lfo.start(0);

        var lfoGain = audioContext.createGain();
        lfoGain.gain.value = 0;

        lfo.connect(lfoGain);

        var filter = audioContext.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 0;
        filter.Q.value = 5.18;

        var filter2 = audioContext.createBiquadFilter();
        filter2.type = "bandpass";
        filter2.frequency.value = 0;
        filter2.Q.value = 5.18;

        var filterGain = audioContext.createGain();
        filterGain.gain.value = 0.7;

        source1.connect(sourceGain);
        source2.connect(sourceGain);
        sourceGain.connect(filter);

        lfoGain.connect(filter.frequency);
        lfoGain.connect(filter2.frequency);
        filter.connect(filter2);
        filter2.connect(filterGain);

        noiseGain.connect(audioContext.gain);
        filterGain.connect(audioContext.gain);
        return {
            sourceGain: sourceGain,
            lfo: lfo,
            lfoGain: lfoGain,
            filter: filter,
            filter2: filter2,
            filterGain: filterGain,
            setFrequency: function(freq) {
                filter.frequency.value = freq;
                filter2.frequency.value = freq;
                lfoGain.gain.value = freq * .06;
            },
            setVolume: function(volume) {
                sourceGain.gain.value = volume;
                noiseGain.gain.value = volume * 0.05;
            }
        };
    }

    var audioGroup;
    var attractor = null;
    var dragConstant = INERTIAL_DRAG_CONSTANT;
    var mouseX, mouseY;
    var particles = [];

    // threejs stuff
    var camera;
    var composer;
    var filter;
    var geometry;
    var pointCloud;
    var renderer;
    var scene;

    function init(_renderer, audioContext) {
        audioGroup = createAudioGroup(audioContext);
        canvas = _renderer.domElement;

        scene = new THREE.Scene();
        renderer = _renderer;
        camera = new THREE.OrthographicCamera(0, canvas.width, 0, canvas.height, 1, 1000);
        camera.position.z = 500;

        function createParticle(originalX, originalY, isStationary, dragRatio) {
            particles.push({
                dragRatio: dragRatio,
                dx: 0,
                dy: 0,
                isStationary: isStationary,
                originalX: originalX,
                originalY: originalY,
                x: originalX,
                y: originalY,
                vertex: null
            });
        }

        for (var x = -EXTENT * GRID_SIZE; x < canvas.width + EXTENT * GRID_SIZE; x += GRID_SIZE) {
            for (var y = -EXTENT * GRID_SIZE; y < canvas.height + EXTENT * GRID_SIZE; y += GRID_SIZE) {
                createParticle(x, y, true, 0.9);
                // createParticle(x, y, true, 0.88);
                // createParticle(x, y, true, 0.86);
                // createParticle(x, y, true, 0.84);
                // createParticle(x, y, true, 0.82);
            }
        }
        NUM_FREE_PARTICLES = particles.length;
        instantiatePointCloudAndGeometry();
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        filter = new THREE.ShaderPass(ExplodeShader);
        filter.uniforms['iResolution'].value = new THREE.Vector2(canvas.width, canvas.height);
        filter.renderToScreen = true;
        composer.addPass(filter);
    }

    function animate(millisElapsed) {
        var timeStep = millisElapsed / 1000 * SIMULATION_SPEED;
        var averageX = 0, averageY = 0;
        var averageVel2 = 0;
        for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            if (attractor != null) {
                var dx = attractor.x - particle.x;
                var dy = attractor.y - particle.y;
                var length2 = Math.sqrt(dx*dx + dy*dy);
                var forceX = GRAVITY_CONSTANT * dx / length2;
                var forceY = GRAVITY_CONSTANT * dy / length2;

                particle.dx += forceX * timeStep;
                particle.dy += forceY * timeStep;
            }

            if (particle.isStationary) {
                var dx = particle.originalX - particle.x;
                var dy = particle.originalY - particle.y;
                var length2 = Math.sqrt(dx*dx + dy*dy);
                var forceX = STATIONARY_CONSTANT * dx * length2;
                var forceY = STATIONARY_CONSTANT * dy * length2;

                particle.dx += forceX * timeStep;
                particle.dy += forceY * timeStep;

                if (attractor == null) {
                    particle.originalX -= dx * 0.05;
                    particle.originalY -= dy * 0.05;
                }
            }

            var thisParticleDragConstant = dragConstant;
            if (particle.dragRatio) {
                thisParticleDragConstant *= particle.dragRatio;
            }
            particle.dx *= Math.pow(thisParticleDragConstant, timeStep);
            particle.dy *= Math.pow(thisParticleDragConstant, timeStep);

            particle.x += particle.dx * timeStep;
            particle.y += particle.dy * timeStep;

            particle.vertex.x = particle.x;
            particle.vertex.y = particle.y;
            averageX += particle.x;
            averageY += particle.y;
            averageVel2 += particle.dx * particle.dx + particle.dy * particle.dy;
        }
        averageX /= NUM_FREE_PARTICLES;
        averageY /= NUM_FREE_PARTICLES;
        averageVel2 /= NUM_FREE_PARTICLES;
        var varianceX2 = 0;
        var varianceY2 = 0;
        var varianceVel22 = 0;
        for (var i = 0; i < NUM_FREE_PARTICLES; i++) {
            var particle = particles[i];
            varianceX2 += Math.pow(particle.x - averageX, 2);
            varianceY2 += Math.pow(particle.y - averageY, 2);
            varianceVel22 += Math.pow(particle.dx * particle.dx + particle.dy * particle.dy - averageVel2, 2);
        }
        varianceX2 /= NUM_FREE_PARTICLES;
        varianceY2 /= NUM_FREE_PARTICLES;
        varianceVel22 /= NUM_FREE_PARTICLES;

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

        // TODO divide velocity and length by canvas dimensions so that size of canvas has no effect

        // in reset formation, the varianceLength = (sqrt(1/2) - 1/2) * magicNumber * canvasWidth
        // magicNumber is experimentally found to be 1.3938
        // AKA varianceLength = 0.28866 * canvasWidth
        var normalizedVarianceLength = varianceLength / (0.28866 * (canvas.width + canvas.height) / 2);

        var groupedUpness = Math.sqrt(averageVel / varianceLength);
        audioGroup.lfo.frequency.value = flatRatio;
        audioGroup.setFrequency(111 / normalizedVarianceLength);
        audioGroup.setVolume(Math.max(groupedUpness - 0.05, 0));

        filter.uniforms['iMouse'].value = new THREE.Vector2(mouseX / canvas.width, (canvas.height - mouseY) / canvas.height);
        // when groupedUpness is 0, shrinkFactor should be 0.98
        // when groupedUpness is 1, shrinkFactor should be 1.0
        // filter.uniforms['shrinkFactor'].value = 0.98 + groupedUpness * 0.03;

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
        // touchY -= 100;
        createAttractor(touchX, touchY);
        mouseX = touchX;
        mouseY = touchY;
    }

    function touchmove(event) {
        var canvasOffset = $(canvas).offset();
        var touch = event.originalEvent.touches[0];
        var touchX = touch.pageX - canvasOffset.left;
        var touchY = touch.pageY - canvasOffset.top;
        // touchY -= 100;
        moveAttractor(touchX, touchY);
        mouseX = touchX;
        mouseY = touchY;
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
        dragConstant = PULLING_DRAG_CONSTANT;
        returnToStartPower = 0;
    }

    function moveAttractor(x, y) {
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
        filter.uniforms['iResolution'].value = new THREE.Vector2(width, height);

        camera.updateProjectionMatrix();
    }

    function instantiatePointCloudAndGeometry() {
        if (pointCloud != null) {
            scene.remove(pointCloud);
        }
        geometry = new THREE.Geometry();
        for(var i = 0; i < NUM_FREE_PARTICLES; i++) {
            var particle = particles[i];
            var vertex = new THREE.Vector3(particle.x, particle.y, 0);
            geometry.vertices.push(vertex);
            particles[i].vertex = vertex;
        }

        var starTexture = THREE.ImageUtils.loadTexture("images/star.png");
        starTexture.minFilter = THREE.NearestFilter;
        var material = new THREE.PointCloudMaterial({
            size: 15,
            sizeAttenuation: false,
            map: starTexture,
            opacity: 0.18,
            transparent: true
        });
        pointCloud = new THREE.PointCloud(geometry, material);
        scene.add(pointCloud);
    }

    var sketch4 = {
        id: "dots",
        init: init,
        instructions: "Click, drag, release, look, listen.",
        animate: animate,
        mousedown: mousedown,
        mousemove: mousemove,
        mouseup: mouseup,
        resize: resize,
        touchstart: touchstart,
        touchmove: touchmove,
        touchend: touchend
    };
    window.registerSketch(sketch4);
})();

