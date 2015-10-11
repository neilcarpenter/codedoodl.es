(function (window) {
    var $window = $(window);
    var HAS_SOUND = false;

    function isElementOnScreen(element) {
        var scrollTop = $window.scrollTop(),
            scrollBottom = scrollTop + $window.height();

        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();
        var elementMiddle = (elementBottom + elementTop) / 2;

        return scrollTop < elementMiddle && elementMiddle < scrollBottom;
    }

    function setCanvasDimensions(renderer, sketchElement) {
        renderer.setSize(sketchElement.width(), sketchElement.height());
    }

    var DEFAULT_SKETCH_OPTIONS = {
        showInstructions: true
    };

    /**
     *
     * Initializes the sketch object passed to it.
     *
     * @param sketch: {
     *     animate: function($sketchElement, canvasContext, audioContext),
     *     id: unique string representing the name of this sketch,
     *     init: function($sketchElement, canvasContext, audioContext),
     *     instructions: string,
     *     mousedown, mouseup, mousemove: function(event) || [function(event)]
     *     resize: function(width, height),
     * }
     * @param $sketchParent: JQuery element to place the sketch on.
     * @param options: {
     *     showInstructions: boolean
     * }
     */
    function initializeSketch(sketch, $sketchParent, options) {
        options = $.extend({}, DEFAULT_SKETCH_OPTIONS, options);
        var init = sketch.init;

        var renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, antialias: true });

        // add sketch element to body
        var $sketchElement = $('<div></div>').addClass("sketch-wrapper").attr('id', sketch.id);
        $sketchParent.append($sketchElement);

        $sketchElement.append(renderer.domElement);

        var $instructionsElement = $("<div>").addClass("instructions").text(sketch.instructions);
        if (options.showInstructions) {
            $sketchElement.append($instructionsElement);
        }

        setCanvasDimensions(renderer, $sketchElement);
        $window.resize(function() {
            setCanvasDimensions(renderer, $sketchElement);
            if (sketch.resize != null) {
                sketch.resize(renderer.domElement.width, renderer.domElement.height);
            }
        });

        // canvas setup
        var $canvas = $(renderer.domElement);
        $canvas.one("mousedown touchstart", function (e) {
            $instructionsElement.addClass("interacted");
        });
        ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend"].forEach(function (eventName) {
            var callback = sketch[eventName];
            if (callback != null) {
                $canvas.on(eventName, callback);
            }
        });
        // prevent scrolling the viewport
        $canvas.on("touchmove", function(event) {
            event.preventDefault();
        });

        var lastTimestamp = 0;
        // initialize and run sketch
        function animateAndRequestAnimFrame(timestamp) {
            var millisElapsed = timestamp - lastTimestamp;
            lastTimestamp = timestamp;
            if (isElementOnScreen($sketchElement)) {
                $sketchElement.removeClass("disabled");
                if (HAS_SOUND) {
                    audioContextGain.gain.value = 1;
                }
                sketch.animate(millisElapsed);
            } else {
                $sketchElement.addClass("disabled");
                audioContextGain.gain.value = 0;
            }
            requestAnimationFrame(animateAndRequestAnimFrame);
        }

        var audioContext = new AudioContext();
        var audioContextGain = audioContext.createGain();
        audioContextGain.connect(audioContext.destination);
        audioContext.gain = audioContextGain;
        if (!HAS_SOUND) {
            audioContextGain.gain.value = 0;
        }
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                audioContextGain.gain.value = 0;
            }
        });

        init(renderer, audioContext);
        requestAnimationFrame(animateAndRequestAnimFrame);
        return $sketchElement;
    }

    var sketches = {};
    function registerSketch(sketch) {
        sketches[sketch.id] = sketch;
    }

    function getSketch(name) {
        return sketches[name];
    }

    window.queryParams = new (function (sSearch) {
      if (sSearch.length > 1) {
        for (var aItKey, nKeyId = 0, aCouples = sSearch.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
          aItKey = aCouples[nKeyId].split("=");
          this[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : "";
        }
      }
    })(window.location.search);

    window.registerSketch = registerSketch;
    window.getSketch = getSketch;
    window.initializeSketch = initializeSketch;
})(window);