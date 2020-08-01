var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HeadWear = /** @class */ (function (_super) {
    __extends(HeadWear, _super);
    function HeadWear(manufacturer, model, size, price, color, diameter) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.diameter = diameter;
        return _this;
    }
    Object.defineProperty(HeadWear.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (value) {
            if (value >= 21 && value <= 25) { // in inches.
                this._diameter = value;
            }
            else
                throw new Error("argument diameter is supposed to be between 21 and 25");
        },
        enumerable: true,
        configurable: true
    });
    HeadWear.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Diameter: " + this.diameter + "<br>");
    };
    return HeadWear;
}(Clothes));
//# sourceMappingURL=HeadWear.js.map