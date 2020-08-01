class ReadGlasses extends Glasses {
    private _recomendedReadingDistance: number;
    public get recomendedReadingDistance(): number {
        return this._recomendedReadingDistance;
    }
    public set recomendedReadingDistance(value: number) {
        if (value >= 15 && value <= 25) {
            this._recomendedReadingDistance = value;
        }
        else throw new Error("argument recomended Reading Distance is supposed to be between 15 and 25");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, ColorOfFrame: ColorOfFrame, recomendedReadingDistance: number) {
        super(manufacturer, model, size, price, color, ColorOfFrame);
        this.recomendedReadingDistance = recomendedReadingDistance;
    }

    public display(): void {
        super.display();
        document.write("The recommended reading distance is: " + this.recomendedReadingDistance + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/20.jpg'/>");
    }
}