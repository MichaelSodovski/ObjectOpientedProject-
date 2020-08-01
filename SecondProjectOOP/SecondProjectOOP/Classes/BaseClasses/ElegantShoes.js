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
var ElegantShoes = /** @class */ (function (_super) {
    __extends(ElegantShoes, _super);
    function ElegantShoes(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced, typeOfShoeCloth) {
        var _this = _super.call(this, manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced) || this;
        _this.typeOfShoeCloth = typeOfShoeCloth;
        return _this;
    }
    ElegantShoes.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Type Of Shoe: " + this.typeOfShoeCloth + "<br>");
    };
    ElegantShoes.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/10.jpg'/>");
    };
    return ElegantShoes;
}(Lacing));
//# sourceMappingURL=ElegantShoes.js.map