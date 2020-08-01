class FemaleShirt extends Shirt {
    private _typeOfCloth: string;
    public get typeOfCloth(): string {
        return this._typeOfCloth; 
    }
    public set typeOfCloth(value: string) {
        if (value.length >= 1 && value.length <= 40) {
            this._typeOfCloth = value;
        }
        else throw new Error("argument number of pockets is supposed to be between 1 and 40");
    } 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfSleeves: number, typeOfCloth: string) {
        super(manufacturer, model, size, price, color, lengthOfSleeves);
        this.typeOfCloth = typeOfCloth;
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/03.jpg'/>");
    }

    public display(): void {
        super.display();
        document.write("Price without Vat: " + this.getPriceWithoutVat() + "<br>");
        document.write("Type of cloth: " + this.typeOfCloth + "<br>");
    }
}