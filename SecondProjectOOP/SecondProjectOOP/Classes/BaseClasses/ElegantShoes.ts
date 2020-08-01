class ElegantShoes extends Lacing {
    public typeOfShoeCloth: TypeOfShoeCloth;

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, landOfProduction: string, DoesTheShoeIsLaced: boolean, typeOfShoeCloth: TypeOfShoeCloth) {
        super(manufacturer, model, size, price, color, landOfProduction, DoesTheShoeIsLaced);
        this.typeOfShoeCloth = typeOfShoeCloth;
    }

    public display(): void {
        super.display();
        document.write("Type Of Shoe: " + this.typeOfShoeCloth + "<br>");
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/10.jpg'/>");
    }
}