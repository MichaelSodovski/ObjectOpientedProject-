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
var ShirtWithButtons = /** @class */ (function (_super) {
    __extends(ShirtWithButtons, _super);
    function ShirtWithButtons(manufacturer, model, size, price, color, lengthOfSleeves, numberOfButtons) {
        var _this = _super.call(this, manufacturer, model, size, price, color, lengthOfSleeves) || this;
        _this.numberOfButtons = numberOfButtons;
        return _this;
    }
    Object.defineProperty(ShirtWithButtons.prototype, "numberOfButtons", {
        get: function () {
            return this._numberOfButtons;
        },
        set: function (value) {
            if (value >= 1 && value <= 10) {
                this._numberOfButtons = value;
            }
            else
                throw new Error("argument number of buttons is supposed to be between 1 and 10");
        },
        enumerable: true,
        configurable: true
    });
    ShirtWithButtons.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/02.jpg'/>");
    };
    ShirtWithButtons.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Price without Vat: " + this.getPriceWithoutVat() + "<br>");
        document.write("Number of buttons: " + this.numberOfButtons + "<br>");
    };
    return ShirtWithButtons;
}(Shirt));
//# sourceMappingURL=ShirtWithButtons.js.map