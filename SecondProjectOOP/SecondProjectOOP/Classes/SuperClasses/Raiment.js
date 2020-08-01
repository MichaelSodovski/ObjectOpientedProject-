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
var Raiment = /** @class */ (function (_super) {
    __extends(Raiment, _super);
    function Raiment(manufacturer, model, size, price, color, waist) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.waist = waist;
        return _this;
    }
    Object.defineProperty(Raiment.prototype, "waist", {
        get: function () {
            return this._waist;
        },
        set: function (value) {
            if (value >= 32 && value <= 53) { // in inches.
                this._waist = value;
            }
            else
                throw new Error("argument waist is supposed to be between 32 and 53.");
        } // 
        ,
        enumerable: true,
        configurable: true
    });
    Raiment.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Land of production: " + this.waist + "<br>");
    };
    return Raiment;
}(Clothes));
//# sourceMappingURL=Raiment.js.map