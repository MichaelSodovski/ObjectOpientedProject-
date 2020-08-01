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
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress(manufacturer, model, size, price, color, waist) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.waist = waist;
        return _this;
    }
    Dress.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Land of production: " + this.waist + "<br>");
    };
    return Dress;
}(Clothes));
//# sourceMappingURL=Dress.js.map