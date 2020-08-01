abstract class Raiment extends Clothes {
    private _waist: number;

    public get waist(): number {
        return this._waist;
    }
    public set waist(value: number) {
        if (value >= 32 && value <= 53) { // in inches.
            this._waist = value;
        }
        else throw new Error("argument waist is supposed to be between 32 and 53.");
    } // 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, waist: number) {
        super(manufacturer, model, size, price, color);
        this.waist = waist;
    }

    public display(): void {
        super.display();
        document.write("Land of production: " + this.waist + "<br>");
    }

}