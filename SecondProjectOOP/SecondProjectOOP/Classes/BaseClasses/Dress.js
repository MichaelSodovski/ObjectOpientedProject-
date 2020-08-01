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
    function Dress(manufacturer, model, size, price, color, waist, length, openOrClosedBack) {
        var _this = _super.call(this, manufacturer, model, size, price, color, waist) || this;
        _this.length = length;
        _this.openOrClosedBack = openOrClosedBack;
        return _this;
    }
    Object.defineProperty(Dress.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            if (value >= 30 && value <= 62) {
                this._length = length;
            }
            else
                throw new Error("length argument supposed to be in the range of 30 - 62.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dress.prototype, "openOrClosedBack", {
        get: function () {
            return this._openOrClosedBack;
        },
        set: function (value) {
            this._openOrClosedBack = value;
        },
        enumerable: true,
        configurable: true
    });
    Dress.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("length: " + this.length + "<br>");
        document.write("Does the dress is of open back type?: " + this.openOrClosedBack + "<br>");
    };
    Dress.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/08.jpg'/>");
    };
    return Dress;
}(Raiment));
//# sourceMappingURL=Dress.js.map