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
var FootWear = /** @class */ (function (_super) {
    __extends(FootWear, _super);
    function FootWear(manufacturer, model, size, price, color, landOfProduction) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.landOfProduction = landOfProduction;
        return _this;
    }
    Object.defineProperty(FootWear.prototype, "landOfProduction", {
        get: function () {
            return this._landOfProduction;
        },
        set: function (value) {
            if (value.length >= 1 && value.length <= 30) {
                this._landOfProduction = value;
            }
            else
                throw new Error("argument landOfProduction is supposed to be between 1 and 30.");
        },
        enumerable: true,
        configurable: true
    });
    FootWear.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Land of production: " + this.landOfProduction + "<br>");
    };
    return FootWear;
}(Clothes));
//# sourceMappingURL=FootWear.js.map