//Task 11
//  Написать программу, которая принимает число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
const redline = require("readline-sync");
const ask = " enter number";
var result = redline.question("Enter number please :");

if (result % 5 == 0 && result % 3 == 0) {
  console.log(`FizBuz`);
} else if (result % 5 == 0) {
  console.log(`Fiz`);
} else if (result % 3 == 0) {
  console.log(`Buz`);
} else {
  console.log(`try again`);
}
