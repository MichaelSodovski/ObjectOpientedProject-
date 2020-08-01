class Skirt extends Raiment {
    public longOrShortSkirt: DressType;

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, waist: number, longOrShortSkirt: DressType) {
        super(manufacturer, model, size, price, color, waist);
        this.longOrShortSkirt = longOrShortSkirt;
    }

    public display(): void {
        super.display();
        document.write("Long of short skirt: " + this.longOrShortSkirt + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/07.jpg'/>");
    }

}