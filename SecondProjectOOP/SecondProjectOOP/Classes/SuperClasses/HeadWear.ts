abstract class HeadWear extends Clothes {
    private _diameter: number;

    public get diameter(): number {
        return this._diameter;
    }
    public set diameter(value: number) {
        if (value >= 21 && value <= 25) { // in inches.
            this._diameter = value; 
        }
        else throw new Error("argument diameter is supposed to be between 21 and 25");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, diameter: number) {
        super(manufacturer, model, size, price, color);
        this.diameter = diameter;
    }

    public display(): void {
        super.display();
        document.write("Diameter: " + this.diameter + "<br>");
    }
}