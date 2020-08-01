class SportShoes extends Lacing {
    private _dateOfManufacturing: string;

    public get dateOfManufacturing(): string {
        return this._dateOfManufacturing;
    }

    public set dateOfManufacturing(value: string) {
            this._dateOfManufacturing = value;

    } 

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string, DoesTheShoeIsLaced: boolean, dateOfManufacturing: string) {
        super(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced);
        this.dateOfManufacturing = dateOfManufacturing;
    }

    public display(): void {
        super.display();
        document.write("Date of manufacturing: " + this.dateOfManufacturing + "<br>"); 
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/11.jpg'/>"); 
    }
}