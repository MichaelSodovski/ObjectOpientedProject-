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
var CascatHat = /** @class */ (function (_super) {
    __extends(CascatHat, _super);
    function CascatHat(manufacturer, model, size, price, color, diameter, doesItContainCommercialLogo) {
        var _this = _super.call(this, manufacturer, model, size, price, color, diameter) || this;
        _this.doesItContainCommercialLogo = doesItContainCommercialLogo;
        return _this;
    }
    Object.defineProperty(CascatHat.prototype, "doesItContainCommercialLogo", {
        get: function () {
            return this._doesItContainCommercialLogo;
        },
        set: function (value) {
            this._doesItContainCommercialLogo = value;
        },
        enumerable: true,
        configurable: true
    });
    CascatHat.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Does The Hat Contains a Commercial Logo?: " + this.doesItContainCommercialLogo + "<br>");
    };
    CascatHat.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/16.jpg'/>");
    };
    return CascatHat;
}(HeadWear));
//# sourceMappingURL=CascatHat.js.map