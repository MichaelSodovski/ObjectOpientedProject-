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
var CottonPants = /** @class */ (function (_super) {
    __extends(CottonPants, _super);
    function CottonPants(manufacturer, model, size, price, color, lengthOfPantLeg, numberOfPockets) {
        var _this = _super.call(this, manufacturer, model, size, price, color, lengthOfPantLeg) || this;
        _this.numberOfPockets = numberOfPockets;
        return _this;
    }
    Object.defineProperty(CottonPants.prototype, "numberOfPockets", {
        get: function () {
            return this._numberOfPockets;
        },
        set: function (value) {
            if (value >= 0 && value <= 10) {
                this._numberOfPockets = value;
            }
            else
                throw new Error("argument numberOfPockets is supposed to be between 0 and 10");
        },
        enumerable: true,
        configurable: true
    });
    CottonPants.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Number of buttons: " + this.numberOfPockets + "<br>");
    };
    CottonPants.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/05.jpg'/>");
    };
    return CottonPants;
}(Pants));
//# sourceMappingURL=CottonPants.js.map