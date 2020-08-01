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
var Lacing = /** @class */ (function (_super) {
    __extends(Lacing, _super);
    function Lacing(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced) {
        var _this = _super.call(this, manufacturer, model, size, price, color, landOfProduction) || this;
        _this.DoesTheShoeIsLaced = DoesTheShoeIsLaced;
        return _this;
    }
    Object.defineProperty(Lacing.prototype, "DoesTheShoeIsLaced", {
        get: function () {
            return this._DoesTheShoeIsLaced;
        },
        set: function (value) {
            this._DoesTheShoeIsLaced = value;
        },
        enumerable: true,
        configurable: true
    });
    Lacing.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Is the shoe is laced?: " + this.DoesTheShoeIsLaced + "<br>");
    };
    return Lacing;
}(FootWear));
//# sourceMappingURL=Lacing.js.map