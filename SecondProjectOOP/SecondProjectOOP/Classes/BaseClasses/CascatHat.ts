class CascatHat extends HeadWear {
    private _doesItContainCommercialLogo: boolean;

    public get doesItContainCommercialLogo(): boolean {
        return this._doesItContainCommercialLogo;
    }
    public set doesItContainCommercialLogo(value: boolean) {
        this._doesItContainCommercialLogo = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, diameter: number, doesItContainCommercialLogo: boolean) {
        super(manufacturer, model, size, price, color, diameter);
        this.doesItContainCommercialLogo = doesItContainCommercialLogo;
    }

    public display(): void {
        super.display();
        document.write("Does The Hat Contains a Commercial Logo?: " + this.doesItContainCommercialLogo + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/16.jpg'/>");
    }
}