class tShirt extends Shirt {
    public _logo: string;

    public get logo(): string {
        return this._logo;
    }
    public set logo(value: string) {
        if (value.length >= 1 && value.length <= 30) {
            this._logo = value;
        }
        else throw new Error("argument logo is supposed to be between 1 and 30.");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfSleeves: number, logo: string) {
        super(manufacturer, model, size, price, color, lengthOfSleeves);
        this.logo = logo;
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/01.jpg'/>");
    }

    public display(): void {
        super.display();
        document.write("Price without Vat: " + this.getPriceWithoutVat() + "<br>");
        document.write("LOGO: " + this.logo + "<br>");
    }

}



