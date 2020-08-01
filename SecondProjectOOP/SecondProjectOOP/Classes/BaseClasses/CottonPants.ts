class CottonPants extends Pants {
    private _numberOfPockets: number;
    public get numberOfPockets(): number {
        return this._numberOfPockets;
    }
    public set numberOfPockets(value: number) {
        if (value >= 0 && value <= 10) {
            this._numberOfPockets = value;
        }
        else throw new Error("argument numberOfPockets is supposed to be between 0 and 10");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfPantLeg: number, numberOfPockets: number) {
        super(manufacturer, model, size, price, color, lengthOfPantLeg);
        this.numberOfPockets = numberOfPockets;
    }

    public display(): void {
        super.display();
        document.write("Number of buttons: " + this.numberOfPockets + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/05.jpg'/>");
    }
}