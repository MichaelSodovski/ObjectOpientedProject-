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
var Pants = /** @class */ (function (_super) {
    __extends(Pants, _super);
    function Pants(manufacturer, model, size, price, color, lengthOfPantLeg) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.lengthOfPantLeg = lengthOfPantLeg;
        return _this;
    }
    Object.defineProperty(Pants.prototype, "lengthOfPantLeg", {
        get: function () {
            return this._lengthOfPantLeg;
        },
        set: function (value) {
            if (value >= 30 && value <= 34) { // in inches.
                this._lengthOfPantLeg = value;
            }
            else
                throw new Error("argument lengthOfPantLeg is supposed to be between 30 and 34.");
        } // 
        ,
        enumerable: true,
        configurable: true
    });
    Pants.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Length Of Pant Leg: " + this.lengthOfPantLeg + "<br>");
    };
    return Pants;
}(Clothes));
//# sourceMappingURL=Pants.js.map