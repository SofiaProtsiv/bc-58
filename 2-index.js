"use strict";
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/
// const a = 20;
// const b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
/*
 ? Перевірте чи парні числа 15, 20, 45, 30.
*/
// console.log(15 % 2)
// console.log(20 % 2)
/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
const totalMinutes = 90;
let hours = Number.parseInt(totalMinutes / 60);
let minutes = totalMinutes % 60;
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");

// console.log(hours + ":" + minutes)

/*
 * Number.parseInt() Number.parseFloat()
 */

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
  ? Дістаньте з цього рядка ціле число / дробове число.
*/
// let number = prompt('Enter Number')
// number = number.replace(",", ".")
// console.log(Number(number))
// console.log(Number.parseInt(number));
// console.log(Number.parseFloat(number))
// console.log(+number)
/*
  ? Спробуйте привести до числа рядок 'abc'. (typeof)
*/
// console.log(+("abc"))

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */
// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.round(3.5));
// console.log(Math.round(3.2));
// console.log((12345.6859).toFixed(2));
// console.log(Math.max(20, 10, 50, 40, 94));
// console.log(Math.min(20, 10, 50, 40, 94, -4));
// console.log(Math.pow(2, 4));
// console.log(2 ** 4);

// const max = 10;
// const min = 1;
// console.log(Math.floor(Math.random() * (max - min) + min));