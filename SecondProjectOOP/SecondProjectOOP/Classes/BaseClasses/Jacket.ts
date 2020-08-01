class Jacket extends TopWear {
    private _numOfPockets: number;
    public get numOfPockets(): number {
        return this._numOfPockets; 
    }
    public set numOfPockets(value: number) {
        if (value >= 2 && value <= 10) {
            this._numOfPockets = value; 
        }
        else throw new Error("argument number of pockets is supposed to be between 2 and 10"); 
    }

    public constructor(manufacturer: string, model: string, size: number, price: number, color: Colors, widthOfFabric: number, numOfPockets: number) {
        super(manufacturer, model, size, price, color, widthOfFabric);
        this.numOfPockets = numOfPockets;
    }

    public display(): void {
        super.display();
        document.write("Number of pockets: " + this.numOfPockets + "<br>"); 
    }

    public showImage(): void {
        document.write("<img height='100' width='100' src='./assets/images/clothingImages/14.jpg'/>"); 
    }
}