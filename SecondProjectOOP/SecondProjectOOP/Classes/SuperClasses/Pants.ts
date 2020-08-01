abstract class Pants extends Clothes {
    private _lengthOfPantLeg: number;

    public get lengthOfPantLeg(): number {
        return this._lengthOfPantLeg;
    }
    public set lengthOfPantLeg(value: number) {
        if (value >= 30 && value <= 34) { // in inches.
            this._lengthOfPantLeg = value; 
        }
        else throw new Error("argument lengthOfPantLeg is supposed to be between 30 and 34.");
    } // 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfPantLeg: number) {
        super(manufacturer, model, size, price, color);
        this.lengthOfPantLeg = lengthOfPantLeg;
    } 

    public display(): void {
        super.display();
        document.write("Length Of Pant Leg: " + this.lengthOfPantLeg + "<br>");
    } 

} 