abstract class Shirt extends Clothes {
    private _lengthOfSleeves: number;

    public get lengthOfSleeves(): number {
        return this._lengthOfSleeves;
    }
    public set lengthOfSleeves(value: number) {
        if (value >= 32 && value <= 37) { // in inches.
            this._lengthOfSleeves = value;
        }
        else throw new Error("argument lengthOfSleeves is supposed to be between 32 and 37.");
    } // 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfSleeves: number) {
        super(manufacturer, model, size, price, color);
        this.lengthOfSleeves = lengthOfSleeves;
    }

    public display(): void {
        super.display();
        document.write("Length Of Sleeve: " + this.lengthOfSleeves + "<br>");
    }
}