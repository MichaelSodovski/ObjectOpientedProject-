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
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(manufacturer, model, size, price, color, widthOfFabric, rainCoat) {
        var _this = _super.call(this, manufacturer, model, size, price, color, widthOfFabric) || this;
        _this.rainCoat = rainCoat;
        return _this;
    }
    Object.defineProperty(Coat.prototype, "rainCoat", {
        get: function () {
            return this._rainCoat;
        },
        set: function (value) {
            this._rainCoat = value;
        },
        enumerable: true,
        configurable: true
    });
    Coat.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Does the coat is a rain coat?: " + this.rainCoat + "<br>");
    };
    Coat.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/15.jpg'/>");
    };
    return Coat;
}(TopWear));
//# sourceMappingURL=Coat.js.map