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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(manufacturer, model, size, price, color, ColorOfFrame) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.ColorOfFrame = ColorOfFrame;
        return _this;
    }
    Glasses.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Land of production: " + this.ColorOfFrame + "<br>");
    };
    return Glasses;
}(Clothes));
//# sourceMappingURL=Glasses.js.map