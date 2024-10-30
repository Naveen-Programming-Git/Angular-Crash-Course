export class Point{
//    private x: number;
//    private y: number;

    constructor(private _x?: number, private _y?: number){
        this._x = _x;
        this._y = _y;
    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    
    get x() {
        return this._x;
    }

    set x(value: number){
        if(value < 0)
            throw new Error("X value cannot be less than zero");

            this._x = value;
    }
}

let point = new Point(1, 2);
//point.x = 1;//Not allowed as Usage of private access modifier
//point.y=2;//Not allowed as Usage of private access modifier
console.log(point.x);
point.x = 3;
console.log(point.x);

point.draw();

