class Jeans extends Pants {
    private _isItRipped: boolean;

    public get isItRipped(): boolean {
        return this._isItRipped;
    }
    public set isItRipped(value: boolean) {
        this._isItRipped = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfPantLeg: number, isItRipped: boolean) {
        super(manufacturer, model, size, price, color, lengthOfPantLeg);
        this.isItRipped = isItRipped;
    }

    public display(): void {
        super.display();
        document.write("Is the jeans is ripped style?: " + this.isItRipped + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/04.jpg'/>");
    }
}