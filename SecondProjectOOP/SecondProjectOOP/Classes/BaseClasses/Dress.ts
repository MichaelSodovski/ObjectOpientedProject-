class Dress extends Raiment {
    private _length: number;
    private _openOrClosedBack: boolean;

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        if (value >= 30 && value <= 62) {
            this._length = length;
        }
        else throw new Error("length argument supposed to be in the range of 30 - 62.");
    }
    public get openOrClosedBack(): boolean {
        return this._openOrClosedBack;
    }
    public set openOrClosedBack(value: boolean) {
            this._openOrClosedBack = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, waist: number, length: number, openOrClosedBack: boolean) {
        super(manufacturer, model, size, price, color, waist);
        this.length = length;
        this.openOrClosedBack = openOrClosedBack;
    }

    public display(): void {
        super.display();
        document.write("length: " + this.length + "<br>");
        document.write("Does the dress is of open back type?: " + this.openOrClosedBack + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/08.jpg'/>");
    }

}