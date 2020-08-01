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
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt(manufacturer, model, size, price, color, lengthOfSleeves) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.lengthOfSleeves = lengthOfSleeves;
        return _this;
    }
    Object.defineProperty(Shirt.prototype, "lengthOfSleeves", {
        get: function () {
            return this._lengthOfSleeves;
        },
        set: function (value) {
            if (value >= 32 && value <= 37) { // in inches.
                this._lengthOfSleeves = value;
            }
            else
                throw new Error("argument lengthOfSleeves is supposed to be between 32 and 37.");
        } // 
        ,
        enumerable: true,
        configurable: true
    });
    Shirt.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Length Of Sleeve: " + this.lengthOfSleeves + "<br>");
    };
    return Shirt;
}(Clothes));
//# sourceMappingURL=Shirt.js.map