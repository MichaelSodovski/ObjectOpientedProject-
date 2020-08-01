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
var EveningDress = /** @class */ (function (_super) {
    __extends(EveningDress, _super);
    function EveningDress(manufacturer, model, size, price, color, waist, length, openOrClosedBack, typeOfCloth) {
        var _this = _super.call(this, manufacturer, model, size, price, color, waist, length, openOrClosedBack) || this;
        _this.typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(EveningDress.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 50) {
                this._typeOfCloth = value;
            }
            else
                throw new Error("typeOfCloth supposed to be a string between 1 and 50 characters of length.");
        },
        enumerable: true,
        configurable: true
    });
    EveningDress.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Type of Cloth: " + this.typeOfCloth + "<br>");
    };
    EveningDress.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/09.jpg'/>");
    };
    return EveningDress;
}(Dress));
//# sourceMappingURL=EveningDress.js.map