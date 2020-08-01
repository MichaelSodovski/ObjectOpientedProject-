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
var SunGlasses = /** @class */ (function (_super) {
    __extends(SunGlasses, _super);
    function SunGlasses(manufacturer, model, size, price, color, ColorOfFrame, ColorOfShade) {
        var _this = _super.call(this, manufacturer, model, size, price, color, ColorOfFrame) || this;
        _this.ColorOfShade = ColorOfShade;
        return _this;
    }
    Object.defineProperty(SunGlasses.prototype, "ColorOfShade", {
        get: function () {
            return this._ColorOfShade;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 20) {
                this._ColorOfShade = value;
            }
            else
                throw new Error("argument color of shade is supposed to be between 1 and 20");
        },
        enumerable: true,
        configurable: true
    });
    SunGlasses.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Color of shade is: " + this.ColorOfShade + "<br>");
    };
    SunGlasses.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/19.jpg'/>");
    };
    return SunGlasses;
}(Glasses));
//# sourceMappingURL=SunGlasses.js.map