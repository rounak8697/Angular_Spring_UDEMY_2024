"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Man_1 = require("./Man");
var Woman_1 = require("./Woman");
//let hooman = new Human("Rounak", "Ghosh");
// //console.log(hooman.getInfo());
var mann = new Man_1.Man("Deabjit", "Das", "Male", "Have a beard");
// //console.log(mann.getInfo());
var woman = new Woman_1.Woman("Durga", "Mata", "Female", "Donot have a beard");
var theHumanArr = [];
theHumanArr.push(woman);
theHumanArr.push(mann);
for (var _i = 0, theHumanArr_1 = theHumanArr; _i < theHumanArr_1.length; _i++) {
    var i = theHumanArr_1[_i];
    console.log(i);
    console.log(i.describeFeature());
}
