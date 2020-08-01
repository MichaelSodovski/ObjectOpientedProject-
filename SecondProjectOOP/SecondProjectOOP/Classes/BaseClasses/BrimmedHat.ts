class BrimmedHat extends HeadWear {
    private _height: number;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        if (value >= 10 && value <= 20) {
            this._height = value;
        }
        else throw new Error("argument height is supposed to be between 10 and 20");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, diameter: number, height: number) {
        super(manufacturer, model, size, price, color, diameter);
        this.height = height;
        
    }

    public display(): void {
        super.display();
        document.write("Height: " + this.height + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/17.jpg'/>");
    }
}