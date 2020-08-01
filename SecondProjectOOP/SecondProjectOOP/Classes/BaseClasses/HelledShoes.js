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
var HelledShoes = /** @class */ (function (_super) {
    __extends(HelledShoes, _super);
    function HelledShoes(manufacturer, model, size, price, color, landOfProduction, TypeOfHeel) {
        var _this = _super.call(this, manufacturer, model, size, price, color, landOfProduction) || this;
        _this.TypeOfHeel = TypeOfHeel;
        return _this;
    }
    HelledShoes.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Type Of Heel: " + this.TypeOfHeel + "<br>");
    };
    HelledShoes.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/13.jpg'/>");
    };
    return HelledShoes;
}(FootWear));
//# sourceMappingURL=HelledShoes.js.map