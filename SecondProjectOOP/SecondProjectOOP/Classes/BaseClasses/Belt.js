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
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    function Belt(manufacturer, model, size, price, color, colorOfBuckle, materialOfBuckle, dimentions) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.colorOfBuckle = colorOfBuckle;
        _this.materialOfBuckle = materialOfBuckle;
        _this.dimentions = dimentions;
        return _this;
    }
    Object.defineProperty(Belt.prototype, "colorOfBuckle", {
        get: function () {
            return this._colorOfBuckle;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 20) {
                this._colorOfBuckle = value;
            }
            else
                throw new Error("string ColorOfShade is supposed to be between 1 and 20");
        },
        enumerable: true,
        configurable: true
    });
    Belt.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Color Of Buckle: " + this.colorOfBuckle + "<br>");
        document.write("Material Of Buckle: " + this.materialOfBuckle + "<br>");
        this.dimentions.display();
    };
    Belt.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/18.jpg'/>");
    };
    return Belt;
}(Clothes));
//# sourceMappingURL=Belt.js.map