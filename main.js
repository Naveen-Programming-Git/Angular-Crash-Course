"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./src/Point");
// function LogMessage (message: string){
//     console.log(message);
// }
// var message = "Hello World1";
// LogMessage(message); // Output: Hello World
var pointObj = new Point_1.Point(1, 2);
pointObj.draw(); // Output: X: 1, Y: 2
