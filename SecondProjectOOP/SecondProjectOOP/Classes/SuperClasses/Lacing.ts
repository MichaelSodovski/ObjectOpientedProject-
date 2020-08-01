abstract class Lacing extends FootWear {
    private _DoesTheShoeIsLaced: boolean;

    public get DoesTheShoeIsLaced(): boolean {
        return this._DoesTheShoeIsLaced;
    }
    public set DoesTheShoeIsLaced(value: boolean) {
        this._DoesTheShoeIsLaced = value;
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string, DoesTheShoeIsLaced: boolean) {
        super(manufacturer, model, size, price, color, landOfProduction);
        this.DoesTheShoeIsLaced = DoesTheShoeIsLaced;
    }

    public display(): void {
        super.display();
        document.write("Is the shoe is laced?: " + this.DoesTheShoeIsLaced + "<br>");
    }
}