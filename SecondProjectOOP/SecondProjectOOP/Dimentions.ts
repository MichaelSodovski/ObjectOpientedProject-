class Dimentions {
    private _length: number;
    private _width: number;
    private _depth: number;

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        if (value >= 26 && value <= 58) {
            this._length = value;
        }
        else throw new Error("argument length is supposed to be between 26 and 58"); 
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        if (value >= 1.5 && value <= 1.75) {
            this._width = value;
        }
        else throw new Error("argument width is supposed to be between 1.5 and 1.75"); 
    }

    public get depth(): number {
        return this._depth;
    }
    public set depth(value: number) {
        if (value >= 30 && value <= 37) {
            this._depth = value;
        }
        else throw new Error("argument depth is supposed to be between 30 and 37"); 
    }

    public constructor(length: number, width: number, depth: number) {
        this.length = length;
        this.width = width;
        this.depth = depth;
    }

    public display(): void {
        document.write(`Dimentions: ${this.length}, ${this.width}, ${this.depth} ` + "<br>");
    }
}