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
var CasualShoes = /** @class */ (function (_super) {
    __extends(CasualShoes, _super);
    function CasualShoes(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced, insole) {
        var _this = _super.call(this, manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced) || this;
        _this.insole = insole;
        return _this;
    }
    Object.defineProperty(CasualShoes.prototype, "insole", {
        get: function () {
            return this._insole;
        },
        set: function (value) {
            this._insole = value;
        },
        enumerable: true,
        configurable: true
    });
    CasualShoes.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Does the show has insole?: " + this.insole + "<br>");
    };
    CasualShoes.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/12.jpg'/>");
    };
    return CasualShoes;
}(Lacing));
//# sourceMappingURL=CasualShoes.js.map