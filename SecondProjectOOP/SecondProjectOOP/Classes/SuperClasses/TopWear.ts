abstract class TopWear extends Clothes {
    private _widthOfFabric: number;
    public get widthOfFabric(): number {
        return this._widthOfFabric;
    }
    public set widthOfFabric(value: number) {
        if (value >= 1.5 && value <= 1.75) {
            this._widthOfFabric = value;
        }
        else throw new Error("argument widthOfFabric is supposed to be between 1.5 and 1.75");
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, widthOfFabric: number) {
        super(manufacturer, model, size, price, color);
        this.widthOfFabric = widthOfFabric;
    }

    public display(): void {
        super.display();
        document.write("Land of production: " + this.widthOfFabric + "<br>"); 
    }
}