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
var ReadGlasses = /** @class */ (function (_super) {
    __extends(ReadGlasses, _super);
    function ReadGlasses(manufacturer, model, size, price, color, ColorOfFrame, recomendedReadingDistance) {
        var _this = _super.call(this, manufacturer, model, size, price, color, ColorOfFrame) || this;
        _this.recomendedReadingDistance = recomendedReadingDistance;
        return _this;
    }
    Object.defineProperty(ReadGlasses.prototype, "recomendedReadingDistance", {
        get: function () {
            return this._recomendedReadingDistance;
        },
        set: function (value) {
            if (value >= 15 && value <= 25) {
                this._recomendedReadingDistance = value;
            }
            else
                throw new Error("argument recomended Reading Distance is supposed to be between 15 and 25");
        },
        enumerable: true,
        configurable: true
    });
    ReadGlasses.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("The recommended reading distance is: " + this.recomendedReadingDistance + "<br>");
    };
    ReadGlasses.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/20.jpg'/>");
    };
    return ReadGlasses;
}(Glasses));
//# sourceMappingURL=ReadGlasses.js.map