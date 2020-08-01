class EveningDress extends Dress {
    private _typeOfCloth: string;

    public get typeOfCloth(): string {
        return this._typeOfCloth;
    }
    public set typeOfCloth(value: string) {
        if (value.length >= 1 && value.length <= 50) {
            this._typeOfCloth = value;
        }
        else throw new Error("typeOfCloth supposed to be a string between 1 and 50 characters of length.");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, waist: number, length: number, openOrClosedBack: boolean, typeOfCloth: string) {
        super(manufacturer, model, size, price, color, waist, length, openOrClosedBack);
        this.typeOfCloth = typeOfCloth;
    }

    public display(): void {
        super.display();
        document.write("Type of Cloth: " + this.typeOfCloth + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/09.jpg'/>");
    }

}