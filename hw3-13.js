//Task 13:

const redline1 = require("readline-sync");
const ask1 = "name the direction of the world where you would like to go";
var result1 = redline.question("Type something:");

switch (result1) {
  case "south":
    console.log("на юг пойдешь счастье найдешь");
    break;

  case "north":
    console.log(" на север пойдешь много денег найдешь");
    break;

  case "west":
    console.log(" на запад пойдешь верного друга найдешь");
    break;
  case "East":
    console.log("  на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log(" try again");
}
