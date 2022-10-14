//Task 3: Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.

//3.1: Строковое Преобразование
let count = 42;
let userName = "42";
console.log(typeof String(count));

//3.2:Строковое Преобразование
let countToString = "" + count;
console.log(typeof countToString);

// 3.3: Численное Преобразование
console.log(typeof +userName);

//3.4: Численное Преобразование
console.log(typeof parseInt(userName));
