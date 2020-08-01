abstract class Glasses extends Clothes {
    public ColorOfFrame: ColorOfFrame;

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, ColorOfFrame: ColorOfFrame) {
        super(manufacturer, model, size, price, color);
        this.ColorOfFrame = ColorOfFrame;
    }

    public display(): void {
        super.display();
        document.write("Land of production: " + this.ColorOfFrame + "<br>");
    }
}