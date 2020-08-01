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
var SwimShorts = /** @class */ (function (_super) {
    __extends(SwimShorts, _super);
    function SwimShorts(manufacturer, model, size, price, color, lengthOfPantLeg, typeOfCloth) {
        var _this = _super.call(this, manufacturer, model, size, price, color, lengthOfPantLeg) || this;
        _this.typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(SwimShorts.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 40) {
                this._typeOfCloth = value;
            }
            else
                throw new Error("argument type of cloth is supposed to be between 1 and 40");
        },
        enumerable: true,
        configurable: true
    });
    SwimShorts.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Type of cloth: " + this.typeOfCloth + "<br>");
    };
    SwimShorts.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/06.jpg'/>");
    };
    return SwimShorts;
}(Pants));
//# sourceMappingURL=SwimShorts.js.map