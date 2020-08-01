class CasualShoes extends Lacing {
    private _insole: boolean;

    public get insole(): boolean {
        return this._insole;
    }
    public set insole(value: boolean) {
        this._insole = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string, DoesTheShoeIsLaced: boolean, insole: boolean) {
        super(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced);
        this.insole = insole;
    }

    public display(): void {
        super.display();
        document.write("Does the show has insole?: " + this.insole + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/12.jpg'/>");
    }
}