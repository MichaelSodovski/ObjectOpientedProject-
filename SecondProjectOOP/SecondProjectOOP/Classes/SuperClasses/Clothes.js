var Clothes = /** @class */ (function () {
    function Clothes(manufacturer, model, size, price, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
    }
    Object.defineProperty(Clothes.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        set: function (value) {
            if (value.length >= 0 && value.length <= 50) {
                this._manufacturer = value;
            }
            else
                throw new Error("argument manufacturer is supposed to be between 0 and 50.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clothes.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            if (value.length >= 0 && value.length <= 50) {
                this._model = value;
            }
            else
                throw new Error("argument model is supposed to be between 0 and 50.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clothes.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            if (value >= 20 && value <= 60) { // in inches.
                this._size = value;
            }
            else
                throw new Error("argument size is supposed to be between 20 and 60.");
        } // 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clothes.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value >= 0 && value <= 1000) {
                this._price = value;
            }
            else
                throw new Error("argument price is supposed to be between 0 and 1000.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clothes.prototype, "brand", {
        get: function () {
            return this.manufacturer + " " + this.model;
        },
        enumerable: true,
        configurable: true
    });
    Clothes.prototype.getPriceWithoutVat = function () {
        return this.price * (1 - Clothes.VAT / 100);
    };
    Clothes.prototype.display = function () {
        document.write("Manufacturer and Model is: " + this.brand + "<br>");
        document.write("Size: " + this.size + "<br>");
        document.write("Price: " + this.price + "<br>");
        document.write("Color: " + this.color + "<br>");
    };
    return Clothes;
}());
//# sourceMappingURL=Clothes.js.map