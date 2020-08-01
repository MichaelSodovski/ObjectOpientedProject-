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
var SportShoes = /** @class */ (function (_super) {
    __extends(SportShoes, _super);
    function SportShoes(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced, dateOfManufacturing) {
        var _this = _super.call(this, manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced) || this;
        _this.dateOfManufacturing = dateOfManufacturing;
        return _this;
    }
    Object.defineProperty(SportShoes.prototype, "dateOfManufacturing", {
        get: function () {
            return this._dateOfManufacturing;
        },
        set: function (value) {
            this._dateOfManufacturing = value;
        },
        enumerable: true,
        configurable: true
    });
    SportShoes.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Date of manufacturing: " + this.dateOfManufacturing + "<br>");
    };
    SportShoes.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/11.jpg'/>");
    };
    return SportShoes;
}(Lacing));
//# sourceMappingURL=SportShoes.js.map