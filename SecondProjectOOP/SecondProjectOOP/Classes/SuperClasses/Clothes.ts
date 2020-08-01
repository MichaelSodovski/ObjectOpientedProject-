abstract class Clothes {
    private _manufacturer: string;
    private _model: string;
    private _size: number;
    private _price: number;
    public color: Colors; 
    public static VAT: number;

    public get manufacturer(): string {
        return this._manufacturer;
    }
    public set manufacturer(value: string) {
        if (value.length >= 0 && value.length <= 50) { 
            this._manufacturer = value;
        }
        else throw new Error("argument manufacturer is supposed to be between 0 and 50.");
    } 
    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        if (value.length >= 0 && value.length <= 50) {
            this._model = value;
        }
        else throw new Error("argument model is supposed to be between 0 and 50.");
    } 
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        if (value >= 20 && value <= 60) { // in inches.
            this._size = value;
        }
        else throw new Error("argument size is supposed to be between 20 and 60.");
    } // 
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        if (value >= 0 && value <= 1000) {
            this._price = value;
        }
        else throw new Error("argument price is supposed to be between 0 and 1000."); 
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
    }
    public get brand(): string {
        return this.manufacturer + " " + this.model;
    }
    abstract showImage(): void;
    public getPriceWithoutVat(): number {
        return this.price * (1 - Clothes.VAT / 100);
    }
    public display(): void {
        document.write("Manufacturer and Model is: " + this.brand + "<br>");
        document.write("Size: " + this.size + "<br>");
        document.write("Price: " + this.price + "<br>");
        document.write("Color: " + this.color + "<br>");
    }
}

