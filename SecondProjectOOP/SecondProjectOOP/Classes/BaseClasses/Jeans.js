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
var Jeans = /** @class */ (function (_super) {
    __extends(Jeans, _super);
    function Jeans(manufacturer, model, size, price, color, lengthOfPantLeg, isItRipped) {
        var _this = _super.call(this, manufacturer, model, size, price, color, lengthOfPantLeg) || this;
        _this.isItRipped = isItRipped;
        return _this;
    }
    Object.defineProperty(Jeans.prototype, "isItRipped", {
        get: function () {
            return this._isItRipped;
        },
        set: function (value) {
            this._isItRipped = value;
        },
        enumerable: true,
        configurable: true
    });
    Jeans.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Is the jeans is ripped style?: " + this.isItRipped + "<br>");
    };
    Jeans.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/04.jpg'/>");
    };
    return Jeans;
}(Pants));
//# sourceMappingURL=Jeans.js.map