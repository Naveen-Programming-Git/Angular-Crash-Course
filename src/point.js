"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    //    private x: number;
    //    private y: number;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("X value cannot be less than zero");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
var point = new Point(1, 2);
//point.x = 1;//Not allowed as Usage of private access modifier
//point.y=2;//Not allowed as Usage of private access modifier
console.log(point.x);
point.x = 3;
console.log(point.x);
point.draw();
