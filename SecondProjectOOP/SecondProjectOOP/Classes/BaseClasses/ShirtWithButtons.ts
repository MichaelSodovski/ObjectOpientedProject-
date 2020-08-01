class ShirtWithButtons extends Shirt {
    private _numberOfButtons: number;
    public get numberOfButtons(): number {
        return this._numberOfButtons;
    }
    public set numberOfButtons(value: number) {
        if (value >= 1 && value <= 10) {
            this._numberOfButtons = value; 
        }
        else throw new Error("argument number of buttons is supposed to be between 1 and 10");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfSleeves: number, numberOfButtons: number) {
        super(manufacturer, model, size, price, color, lengthOfSleeves);
        this.numberOfButtons = numberOfButtons;
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/02.jpg'/>");
    }

    public display(): void {
        super.display();
        document.write("Price without Vat: " + this.getPriceWithoutVat() + "<br>");
        document.write("Number of buttons: " + this.numberOfButtons + "<br>");
    }
}
