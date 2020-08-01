abstract class FootWear extends Clothes {
    private _landOfProduction: string;

    public get landOfProduction(): string {
        return this._landOfProduction;
    }
    public set landOfProduction(value: string) {
        if (value.length >= 1 && value.length <= 30) { 
            this._landOfProduction = value;
        }
        else throw new Error("argument landOfProduction is supposed to be between 1 and 30.");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string) {
        super(manufacturer, model, size, price, color);
        this.landOfProduction = landOfProduction;
    }

    public display(): void {
        super.display();
        document.write("Land of production: " + this.landOfProduction + "<br>");
    }
}