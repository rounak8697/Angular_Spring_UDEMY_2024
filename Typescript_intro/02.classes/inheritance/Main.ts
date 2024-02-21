import { Human } from "./Human";
import { Man } from "./Man";
import { Woman } from "./Woman";

let hooman = new Human("Rounak", "Ghosh");
//console.log(hooman.getInfo());

let mann = new Man("Debajit", "Das", "Male", "Have a beard");
//console.log(mann.getInfo());

let woman = new Woman("Durga", "Mata", "Female", "Donot have a beard");
//console.log(mann.getInfo());

let theHumanArr: Human[] = [];
theHumanArr.push(hooman);
theHumanArr.push(mann);
theHumanArr.push(woman);

for (let i of theHumanArr) {
  console.log(i);
}
