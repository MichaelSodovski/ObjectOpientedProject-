class Coat extends TopWear {
    private _rainCoat: boolean;

    public get rainCoat(): boolean {
        return this._rainCoat;
    }
    public set rainCoat(value: boolean) {
        this._rainCoat = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, widthOfFabric: number, rainCoat: boolean) {
        super(manufacturer, model, size, price, color, widthOfFabric);
        this.rainCoat = rainCoat;
    }

    public display(): void {
        super.display();
        document.write("Does the coat is a rain coat?: " + this.rainCoat + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/15.jpg'/>");
    }
}