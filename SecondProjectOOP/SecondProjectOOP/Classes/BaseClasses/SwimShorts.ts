class SwimShorts extends Pants {
    private _typeOfCloth: string;
    public get typeOfCloth(): string {
        return this._typeOfCloth;
    }
    public set typeOfCloth(value: string) {
        if (value.length >= 1 && value.length <= 40) {
            this._typeOfCloth = value;
        }
        else throw new Error("argument type of cloth is supposed to be between 1 and 40");
    } 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, lengthOfPantLeg: number, typeOfCloth: string) {
        super(manufacturer, model, size, price, color, lengthOfPantLeg);
        this.typeOfCloth = typeOfCloth;
    }

    public display(): void {
        super.display();
        document.write("Type of cloth: " + this.typeOfCloth + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/06.jpg'/>");
    }
}