var Dimentions = /** @class */ (function () {
    function Dimentions(length, width, depth) {
        this.length = length;
        this.width = width;
        this.depth = depth;
    }
    Object.defineProperty(Dimentions.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            if (value >= 26 && value <= 58) {
                this._length = value;
            }
            else
                throw new Error("argument length is supposed to be between 26 and 58");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimentions.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value >= 1.5 && value <= 1.75) {
                this._width = value;
            }
            else
                throw new Error("argument width is supposed to be between 1.5 and 1.75");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimentions.prototype, "depth", {
        get: function () {
            return this._depth;
        },
        set: function (value) {
            if (value >= 30 && value <= 37) {
                this._depth = value;
            }
            else
                throw new Error("argument depth is supposed to be between 30 and 37");
        },
        enumerable: true,
        configurable: true
    });
    Dimentions.prototype.display = function () {
        document.write("Dimentions: " + this.length + ", " + this.width + ", " + this.depth + " " + "<br>");
    };
    return Dimentions;
}());
//# sourceMappingURL=Dimentions.js.map