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
var Jacket = /** @class */ (function (_super) {
    __extends(Jacket, _super);
    function Jacket(manufacturer, model, size, price, color, widthOfFabric, numOfPockets) {
        var _this = _super.call(this, manufacturer, model, size, price, color, widthOfFabric) || this;
        _this.numOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(Jacket.prototype, "numOfPockets", {
        get: function () {
            return this._numOfPockets;
        },
        set: function (value) {
            if (value >= 2 && value <= 10) {
                this._numOfPockets = value;
            }
            else
                throw new Error("argument number of pockets is supposed to be between 2 and 10");
        },
        enumerable: true,
        configurable: true
    });
    Jacket.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Number of pockets: " + this.numOfPockets + "<br>");
    };
    Jacket.prototype.showImage = function () {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/14.jpg'/>");
    };
    return Jacket;
}(TopWear));
//# sourceMappingURL=Jacket.js.map