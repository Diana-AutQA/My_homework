//Task 14 💻
//Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции

const min:number=30;
const max:number=50;
const res:number = Math.floor(Math.random()*(max-min))+min;

console.log(res)