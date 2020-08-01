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
var tShirt = /** @class */ (function (_super) {
    __extends(tShirt, _super);
    function tShirt(manufacturer, model, size, price, color, lengthOfSleeves, logo) {
        var _this = _super.call(this, manufacturer, model, size, price, color, lengthOfSleeves) || this;
        _this.logo = logo;
        return _this;
    }
    Object.defineProperty(tShirt.prototype, "logo", {
        get: function () {
            return this._logo;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 30) {
                this._logo = value;
            }
            else
                throw new Error("argument logo is supposed to be between 1 and 30.");
        },
        enumerable: true,
        configurable: true
    });
    tShirt.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/01.jpg'/>");
    };
    tShirt.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Price without Vat: " + this.getPriceWithoutVat() + "<br>");
        document.write("LOGO: " + this.logo + "<br>");
    };
    return tShirt;
}(Shirt));
//# sourceMappingURL=tShirt.js.map