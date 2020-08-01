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
var TopWear = /** @class */ (function (_super) {
    __extends(TopWear, _super);
    function TopWear(manufacturer, model, size, price, color, widthOfFabric) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.widthOfFabric = widthOfFabric;
        return _this;
    }
    Object.defineProperty(TopWear.prototype, "widthOfFabric", {
        get: function () {
            return this._widthOfFabric;
        },
        set: function (value) {
            if (value >= 1.5 && value <= 1.75) {
                this._widthOfFabric = value;
            }
            else
                throw new Error("argument widthOfFabric is supposed to be between 1.5 and 1.75");
        },
        enumerable: true,
        configurable: true
    });
    TopWear.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Land of production: " + this.widthOfFabric + "<br>");
    };
    return TopWear;
}(Clothes));
//# sourceMappingURL=TopWear.js.map