(function () {
    var LINE_SEGMENT_LENGTH = (window.screen.width > 1024) ? 11 : 22;

    var HeightMap = {
        width: 1200,
        height: 1200,
        frame: 0,
        /**
         * How wavy the heightmap is, from [0..1]. 0 means not wavy at all (only bulbous); 1.0 means only wavy.
         */
        getWaviness: function(frame) {
            return (1+Math.sin(frame / 100))/2;
        },
        evaluate: function(x, y) {
            var length2 = x*x+y*y;
            // z1 creates the bulb shape at the center (using a logistic function)
            var z1 = 23000 / (1 + Math.exp(-length2 / 10000));
            // z2 creates the radial wave shapes from the center
            var z2 = 600 * Math.cos(length2 / 25000 + HeightMap.frame / 25);
            // z3 is a smaller radial wave shape that is centered towards the mouse
            var z3 = 100 * Math.cos(Math.sqrt(Math.pow(x - HeightMap.width, 2) + Math.pow(y - HeightMap.height, 2)) / 20 + HeightMap.frame / 25);

            return Math.lerp(z1, z2, HeightMap.getWaviness(HeightMap.frame)) + z3;
        },
        gradient: function (x,y) {
            var fnxy = HeightMap.evaluate(x, y);
            var epsilon = 1e-4;
            var ddx = (HeightMap.evaluate(x + epsilon, y) - fnxy) / epsilon;
            var ddy = (HeightMap.evaluate(x, y + epsilon) - fnxy) / epsilon;

            return [ddx, ddy];
        }
    }

    function permutedLine(ox, oy, nx, ny, geometry) {
        var distance = Math.sqrt(Math.pow(ox-nx, 2) + Math.pow(oy-ny, 2));
        // about 11 units per line segment
        var steps = distance / LINE_SEGMENT_LENGTH;
        if (geometry == null) {
            geometry = new THREE.Geometry();
            for( var t = 0; t <= steps; t++) {
                geometry.vertices.push(new THREE.Vector3());
            }
        }

        function permutePoint(x, y, idx) {
            var grad = HeightMap.gradient(x, y);
            geometry.vertices[idx].set(x + grad[0], y + grad[1], 0);
        }

        for( var t = 0; t <= steps; t++) {
            var percentage = t / steps;
            permutePoint(ox + (nx - ox) * percentage,
                         oy + (ny - oy) * percentage, t);
        }
        return geometry;
    }

    // offsetX and offsetY define the vector that the line draws on (the inline direction). the direction that
    // the vector offsets to repeat itself is the traversal direction. The two are always orthogonal.
    function LineStrip(width, height, offsetX, offsetY, gridSize) {
        this.inlineAngle = Math.atan(offsetY / offsetX);
        this.gridSize = gridSize;
        this.dx = 1;
        this.dy = 1;

        // the specific offset of the entire line for this frame
        this.gridOffsetX = 0;
        this.gridOffsetY = 0;

        this.object = new THREE.Object3D();

        this.resize(width, height);
    }

    LineStrip.prototype.update = function() {
        this.gridOffsetX = ((this.gridOffsetX + this.dx) % this.gridSize + this.gridSize) % this.gridSize;
        this.gridOffsetY = ((this.gridOffsetY + this.dy) % this.gridSize + this.gridSize) % this.gridSize;
        // console.log(this.gridOffsetX, this.gridOffsetY);
        this.object.children.forEach(function(lineMesh) {
            var x = lineMesh.x;
            var y = lineMesh.y;
            var inlineOffsetX = lineMesh.inlineOffsetX;
            var inlineOffsetY = lineMesh.inlineOffsetY;
            var geometry = lineMesh.geometry;
            permutedLine(x + this.gridOffsetX - inlineOffsetX,
                         y + this.gridOffsetY - inlineOffsetY,
                         x + this.gridOffsetX + inlineOffsetX,
                         y + this.gridOffsetY + inlineOffsetY,
                         geometry);
            geometry.verticesNeedUpdate = true;
        }.bind(this));
    }

    LineStrip.prototype.resize = function(width, height) {
        this.width = width;
        this.height = height;
        this.gridOffset = 0;

        // delete old lines
        this.object.remove.apply(this.object, this.object.children);

        var diagLength = Math.sqrt(this.width*this.width + this.height*this.height) + 2 * this.gridSize;
        // create and add a Line mesh to the lines array
        var createAndAddLine = function(x, y) {
            var inlineOffsetX = Math.cos(this.inlineAngle) * diagLength / 2;
            var inlineOffsetY = Math.sin(this.inlineAngle) * diagLength / 2;
            var geometry = permutedLine(x - inlineOffsetX, y - inlineOffsetY, x + inlineOffsetX, y + inlineOffsetY);
            var lineMesh = new THREE.Line(geometry, lineMaterial);
            lineMesh.frustumCulled = false;
            this.object.add(lineMesh);
            lineMesh.x = x;
            lineMesh.y = y;
            lineMesh.inlineOffsetX = inlineOffsetX;
            lineMesh.inlineOffsetY = inlineOffsetY;
        }.bind(this);

        createAndAddLine(0, 0);

        var traversalAngle = this.inlineAngle + Math.PI / 2;
        for (var d = this.gridSize; d < diagLength/2; d += this.gridSize) {
            createAndAddLine(+Math.cos(traversalAngle) * d,
                             +Math.sin(traversalAngle) * d);
            createAndAddLine(-Math.cos(traversalAngle) * d,
                             -Math.sin(traversalAngle) * d);
        }
    }

    function createAudioGroup(audioContext) {
        var backgroundAudio = $("<audio autoplay loop>")
                                .append('<source src="audio/waves_background.mp3" type="audio/mp3">')
                                .append('<source src="audio/waves_background.ogg" type="audio/ogg">');

        var sourceNode = audioContext.createMediaElementSource(backgroundAudio[0]);
        window.sourceNode = sourceNode;
        $("body").append(backgroundAudio);

        var backgroundAudioGain = audioContext.createGain();
        backgroundAudioGain.gain.value = 0.0;
        sourceNode.connect(backgroundAudioGain);
        backgroundAudioGain.connect(audioContext.gain);

        var noise = (function() {
            var node = audioContext.createBufferSource()
            , buffer = audioContext.createBuffer(1, audioContext.sampleRate * 5, audioContext.sampleRate)
            , data = buffer.getChannelData(0);
            for (var i = 0; i < buffer.length; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            node.buffer = buffer;
            node.loop = true;
            node.start(0);
            return node;
        })();

        var biquadFilter = (function() {
            var node = audioContext.createScriptProcessor(undefined, 1, 1);
            node.a0 = 1;
            node.b1 = 0;

            function setBiquadParameters(node, frame) {
                node.a0 = getDarkness(frame + 10) * 0.8;
                node.b1 = Math.map(Math.pow(HeightMap.getWaviness(frame), 2), 0, 1, -0.92, -0.27);
                backgroundAudioGain.gain.value = Math.map(getDarkness(frame + 10), 0, 1, 1, 0.8);
            }

            node.onaudioprocess = function(e) {
                var input = e.inputBuffer.getChannelData(0);
                var output = e.outputBuffer.getChannelData(0);
                var framesPerSecond = isTimeFast ? 60*4 : 60;
                for (var n = 0; n < e.inputBuffer.length; n++) {
                    if (n % 512 === 0) {
                        var frameOffset = n / audioContext.sampleRate * framesPerSecond;
                        setBiquadParameters(node, HeightMap.frame + frameOffset);
                    }
                    var x = input[n];
                    var y1 = output[n - 1] || 0;

                    output[n] = node.a0 * x - node.b1 * y1;
                }
            }
            return node;
        })();
        noise.connect(biquadFilter);

        var biquadFilterGain = audioContext.createGain();
        biquadFilterGain.gain.value = 0.01;
        biquadFilter.connect(biquadFilterGain);

        biquadFilterGain.connect(audioContext.gain);
        return {
            biquadFilter: biquadFilter
        };
    }

    var audioGroup;
    var lineStrips = [];
    var isTimeFast = false;

    // threejs stuff
    var camera;
    var lineMaterial = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.03 });
    var renderer;
    var scene;

    function init(_renderer, audioContext) {
        audioGroup = createAudioGroup(audioContext);
        renderer = _renderer;
        renderer.autoClearColor = false;

        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(0, 1, 0, 1, 1, 1000);
        camera.position.z = 500;

        // cheap mobile detection
        var gridSize = (window.screen.width > 1024) ? 50 : 100;
        // lineStrips.push(new LineStrip(HeightMap.width, HeightMap.height, 1, 1, gridSize));
        lineStrips.push(new LineStrip(HeightMap.width, HeightMap.height, 1, -1, gridSize));
        lineStrips.push(new LineStrip(HeightMap.width, HeightMap.height, 0, 1, gridSize));
        // lineStrips.push(new LineStrip(HeightMap.width, HeightMap.height, 1, 0, gridSize));

        lineStrips.forEach(function (lineStrip) {
            scene.add(lineStrip.object);
        });

        resize(_renderer.domElement.width, _renderer.domElement.height);
        // set a default x/y for the mouse so the wave travels to the bottom-right by default
    }

    function animate() {
        var opacityChangeFactor = 0.1;
        if (isTimeFast) {
            lineMaterial.opacity = lineMaterial.opacity * (1 - opacityChangeFactor) + 0.23 * opacityChangeFactor;
            HeightMap.frame += 4;
        } else {
            lineMaterial.opacity = lineMaterial.opacity * (1 - opacityChangeFactor) + 0.03 * opacityChangeFactor;
            HeightMap.frame += 1;
        }

        if (HeightMap.frame % 1000 < 500) {
            lineMaterial.color.set("rgb(50, 12, 12)");
        } else {
            lineMaterial.color.set("rgb(252, 247, 243)");
        }

        var scale = Math.map(Math.sin(HeightMap.frame / 550), -1, 1, 1, 0.8);
        camera.scale.set(scale, scale, 1);
        lineStrips.forEach(function (lineStrip) {
            lineStrip.update();
        });
        renderer.render(scene, camera);
    }

    // return a number from [0..1] indicating in general how dark the image is; 1.0 means very dark, while 0.0 means very light
    function getDarkness(frame) {
        if (frame % 1000 < 500) {
            return Math.map(frame % 500, 0, 500, 0, 1);
        } else {
            return Math.map(frame % 500, 0, 500, 1, 0);
        }
    }

    function mousemove(event) {
        setVelocityFromMouseEvent(event);
    }

    function mousedown(event) {
        if (event.which === 1) {
            isTimeFast = true;
            setVelocityFromMouseEvent(event);
        }
    }

    function mouseup(event) {
        if (event.which === 1) {
            isTimeFast = false;
            setVelocityFromMouseEvent(event);
        }
    }

    function setVelocityFromMouseEvent(event) {
        var mouseX = event.offsetX == undefined ? event.originalEvent.layerX : event.offsetX;
        var mouseY = event.offsetY == undefined ? event.originalEvent.layerY : event.offsetY;
        setVelocityFromCanvasCoordinates(mouseX, mouseY);
    }

    function resize(width, height) {
        if (width > height) {
            HeightMap.height = 1200;
            HeightMap.width = 1200 * width / height;
        } else {
            HeightMap.width = 1200;
            HeightMap.height = 1200 * height / width;
        }
        camera.left = -HeightMap.width / 2;
        camera.top = -HeightMap.height / 2;
        camera.bottom = HeightMap.height / 2;
        camera.right = HeightMap.width / 2;
        camera.updateProjectionMatrix();

        renderer.setClearColor(0xfcfcfc, 1);
        renderer.clear();

        // draw black again
        HeightMap.frame = 0;

        lineStrips.forEach(function (lineStrip) {
            lineStrip.resize(HeightMap.width, HeightMap.height);
        });
    }

    function touchstart(event) {
        // prevent emulated mouse events from occuring
        event.preventDefault();

        isTimeFast = true;
        setVelocityFromTouchEvent(event);
    }

    function touchmove(event) {
        setVelocityFromTouchEvent(event);
    }

    function touchend(event) {
        isTimeFast = false;
    }

    function setVelocityFromTouchEvent(event) {
        var canvasOffset = $(renderer.domElement).offset();
        var touch = event.originalEvent.touches[0];
        var touchX = touch.pageX - canvasOffset.left;
        var touchY = touch.pageY - canvasOffset.top;

        setVelocityFromCanvasCoordinates(touchX, touchY);
    }

    function setVelocityFromCanvasCoordinates(canvasX, canvasY) {
        var dx = Math.map(canvasX, 0, renderer.domElement.width, -1, 1) * 2.20;
        var dy = Math.map(canvasY, 0, renderer.domElement.height, -1, 1) * 2.20;
        lineStrips.forEach(function (lineStrip) {
            lineStrip.dx = dx;
            lineStrip.dy = dy;
        });
    }

    var sketch3 = {
        id: "waves",
        init: init,
        animate: animate,
        mousemove: mousemove,
        mousedown: mousedown,
        mouseup: mouseup,
        resize: resize,
        touchstart: touchstart,
        touchmove: touchmove,
        touchend: touchend
    };
    window.registerSketch(sketch3);
})();

