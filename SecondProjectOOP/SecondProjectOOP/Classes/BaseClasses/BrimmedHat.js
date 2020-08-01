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
var BrimmedHat = /** @class */ (function (_super) {
    __extends(BrimmedHat, _super);
    function BrimmedHat(manufacturer, model, size, price, color, diameter, height) {
        var _this = _super.call(this, manufacturer, model, size, price, color, diameter) || this;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(BrimmedHat.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value >= 10 && value <= 20) {
                this._height = value;
            }
            else
                throw new Error("argument height is supposed to be between 10 and 20");
        },
        enumerable: true,
        configurable: true
    });
    BrimmedHat.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Height: " + this.height + "<br>");
    };
    BrimmedHat.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/17.jpg'/>");
    };
    return BrimmedHat;
}(HeadWear));
//# sourceMappingURL=BrimmedHat.js.map