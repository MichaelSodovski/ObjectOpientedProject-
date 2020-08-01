class SunGlasses extends Glasses {
    private _ColorOfShade: string;
    public get ColorOfShade(): string {
        return this._ColorOfShade;
    }
    public set ColorOfShade(value: string) {
        if (value.length >= 1 && value.length <= 20) {
            this._ColorOfShade = value;
        }
        else throw new Error("argument color of shade is supposed to be between 1 and 20");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, ColorOfFrame: ColorOfFrame, ColorOfShade: string) {
        super(manufacturer, model, size, price, color, ColorOfFrame);
        this.ColorOfShade = ColorOfShade;
    }

    public display(): void {
        super.display();
        document.write("Color of shade is: " + this.ColorOfShade + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/19.jpg'/>");
    }
}