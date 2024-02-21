"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = require("./Human");
const Man_1 = require("./Man");
let hooman = new Human_1.Human("Rounak", "Ghosh");
//console.log(hooman.getInfo());
let mann = new Man_1.Man("Debajit", "Das", "Male", "Have a beard");
//console.log(mann.getInfo());
let woman = new Man_1.Man("Durga", "Mata", "Female", "Donot have a beard");
//console.log(mann.getInfo());
let theHumanArr = [];
theHumanArr.push(hooman);
theHumanArr.push(mann);
theHumanArr.push(woman);
for (let i of theHumanArr) {
    console.log(i);
}
