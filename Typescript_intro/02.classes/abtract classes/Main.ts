import { Human } from "./Human";
import { Man } from "./Man";
import { Woman } from "./Woman";

//let hooman = new Human("Rounak", "Ghosh");
// //console.log(hooman.getInfo());

let mann = new Man("Deabjit", "Das", "Male", "Have a beard");
// //console.log(mann.getInfo());
let woman = new Woman("Durga", "Mata", "Female", "Donot have a beard");

let theHumanArr: Human[] = [];
theHumanArr.push(woman);
theHumanArr.push(mann);

for (let i of theHumanArr) {
  console.log(i);
  console.log(i.describeFeature());
}
