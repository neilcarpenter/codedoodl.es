(function (Math) {
    Math.lerp = function (a, b, x) {
        return a + (b-a) * x;
    };
    Math.map = function (x, xStart, xStop, yStart, yStop) {
        return Math.lerp(yStart, yStop, (x - xStart) / (xStop - xStart));
    };

})(Math);

THREE.Vector2.prototype.multiply = function(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
}
