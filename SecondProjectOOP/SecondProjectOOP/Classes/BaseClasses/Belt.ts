class Belt extends Clothes {
    private _colorOfBuckle: string;
    public materialOfBuckle: MaterialOfBuckle;
    public dimentions: Dimentions;
    public get colorOfBuckle(): string {
        return this._colorOfBuckle;
    }
    public set colorOfBuckle(value: string) {
        if (value.length >= 1 && value.length <= 20) {
            this._colorOfBuckle = value;
        }
        else throw new Error("string ColorOfShade is supposed to be between 1 and 20");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, colorOfBuckle: string, materialOfBuckle: MaterialOfBuckle, dimentions: Dimentions) {
        super(manufacturer, model, size, price, color);
        this.colorOfBuckle = colorOfBuckle;
        this.materialOfBuckle = materialOfBuckle;
        this.dimentions = dimentions;
    }

    public display(): void {
        super.display();
        document.write("Color Of Buckle: " + this.colorOfBuckle + "<br>");
        document.write("Material Of Buckle: " + this.materialOfBuckle + "<br>");
        this.dimentions.display();
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/18.jpg'/>");
    }
}