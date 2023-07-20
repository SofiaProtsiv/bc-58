"use strict";

/*
 * Розгалуження if
 */

// if (6 < 5) {
//     console.log("6<5");
// }
// else if (5 >= 5) {
//     console.log("5>=5");
// } else if (5 < 3) {
//     console.log("5<3");
// } else {
//     console.log("don't known");
// }

// if(6 > 5){
// console.log("6>5");
// }

// if(5 < 3){
// console.log("5<3");
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/
// const str = "abcde";
// if (str.startsWith("a")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/
// const minutes = 15;

// if (minutes >= 0 && minutes < 15) {
//   console.log("перша чверть години");
// } else if (minutes >= 15 && minutes < 30) {
//   console.log("друга чверть години");
// } else if (minutes >= 30 && minutes < 45) {
//   console.log("третя чверть години");
// } else if (minutes >= 45 && minutes <= 59) {
//   console.log("четверта чверть години");
// } else {
//   console.log("No matches");
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/
// const answer = prompt("Яка «офіційна» назва JavaScript?").trim().toLowerCase();
// const result = "ECMAScript".toLowerCase();

// 0, "", false, NaN, null, undefined ====> FALSE

// if (!answer) {
//   // answer === ""
//   console.log("empty!!! enter smth");
// } else if (answer === result) {
//   console.log("Вірно!");
// } else {
//   console.log("Не знаєте? ECMAScript!");
// }

/*
? Є деякі рядки, які потрібно перевірити на вміст заборонених слів spam і sale, і повернути результат перевірки. 
? Слова в рядку можуть бути у довільному регістрі, наприклад SPAM або sAlE. 
? Якщо знайшли заборонене слово (spam або sale) то повертайте true. 
? Якщо в рядку відсутні заборонені слова, повертайте false.
*/

// const str = "Get best sale offers now!";
// const normalizedStr = str.toLowerCase();

// const result = normalizedStr.includes("spam") || normalizedStr.includes("sale");

// console.log(result)
// if(normalizedStr.includes("spam") || normalizedStr.includes("sale")){
//     console.log(true)
// }else{
//     console.log(false)
// }

// "Latest technology news" false
// "JavaScript weekly newsletter" false
// "Get best sale offers now!" true
// "Amazing SalE, only tonight!" true
// "Trust me, this is not a spam message" true
// "Get rid of sPaM emails. Our book in on sale!" true

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

/*
? Напиши скрипт,який виконує арифметичні дії над двома числами. Попроси користувача ввести символ операції (`+`, `-`, `/`, `*`)
*/
// const num1 = Number.parseFloat(prompt("Введіть перше число"));
// const num2 = Number.parseFloat(prompt("Введіть друге число"));
// const operation = prompt("Яку операцію над числами бажаєте виконати?");

// switch (operation) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("smth went wrong");
// }

/*
? Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної monthNumber.
? Якщо значення змінної monthNumber:

? 12, 1, 2, виводь рядок "Це зима"
? 3, 4, 5, виводь рядок "Це весна"
? 6, 7, 8, виводь рядок "Це літо"
? 9, 10, 11, виводь рядок "Це осінь"
*/
// const monthNumber = Math.floor(Math.random() * (12 - 1) + 1);
// console.log(monthNumber)

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Це зима")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Це весна")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Це літо")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Це осінь")
//         break;
//     default:
//         break;
// }

/*
 * Тернарний оператор
 */

// if (6 < 5) {

// } else {
//
// }

//<умова> ? <вираз_якщо_умова_істинна> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 3;
// let message = "";

// if (a + b < 4) {
//   message = "Мало";
// } else {
//   message = "Багато";
// }

// let message = a + b < 4 ? "Мало" : "Багато";
// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Директор';

// let message = "Ми вас не знаєм!!!";

// if (login === "Співробітник") {
//   message = "Привіт";
// } else if (login === "Директор") {
//   message = "Здравствуйте";
// } else if (login === null) {
//   message = "Немає логіна";
// }

// console.log(message)

// const login = "Директор";
// let message =
//   login === "Співробітник"
//     ? "Привіт"
//     : login === "Директор"
//     ? "Здравствуйте"
//     : login === null
//     ? "Немає логіна"
//     : "Ми вас не знаєм!!!";

// console.log(message);
