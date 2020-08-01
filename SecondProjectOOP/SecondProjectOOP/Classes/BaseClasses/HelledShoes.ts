class HelledShoes extends FootWear {
    public TypeOfHeel: TypeOfHeel;

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string, TypeOfHeel: TypeOfHeel) {
        super(manufacturer, model, size, price, color, landOfProduction);
        this.TypeOfHeel = TypeOfHeel;
    }

    public display(): void {
        super.display();
        document.write("Type Of Heel: " + this.TypeOfHeel + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/13.jpg'/>");
    }
}