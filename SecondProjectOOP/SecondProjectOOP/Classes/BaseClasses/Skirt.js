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
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(manufacturer, model, size, price, color, waist, longOrShortSkirt) {
        var _this = _super.call(this, manufacturer, model, size, price, color, waist) || this;
        _this.longOrShortSkirt = longOrShortSkirt;
        return _this;
    }
    Skirt.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Long of short skirt: " + this.longOrShortSkirt + "<br>");
    };
    Skirt.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/07.jpg'/>");
    };
    return Skirt;
}(Raiment));
//# sourceMappingURL=Skirt.js.map