"use strict";
/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

/*
? Виведіть числа від 1 до 50
*/
// let num = 1;

// while (num <= 50) {
//   console.log(num);
//   num += 1;
//   // num++
//   // num = num + 1
// }

/*
? Знайдіть суму чисел от 1 до 50
// */
// let num = 1;
// let sum = 0;

// while(num <= 50){
//     sum += num
//     num += 1
// }
// console.log(sum)

/*
 * Do While
 */
// do {
//     statement
// } while (condition);

/*
? Напишіть цикл, який пропонує prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз, і таке інше.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/
// let number = null;

// do {
//     number = Number.parseFloat(prompt("Enter number > 100"))
// } while (number < 100) {
//     console.log("Okay")
// }

/*
 * For
 */
// for (ініціалізація; умова; пост-вираз) {
// тіло цикла
// }

/*
?За допомогою циклу for виведіть парні числа від 2 до 10.
*/
// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(`${i} - парне`);
//   }
// }

/*
? Вивести числа у зворотньому порядку починаючи з 10, коли цикл дійде до нуля, показати повідомлення "Час вийшов"
*/
// for (let i = 10; i >= 0; i--) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i)
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 25, з двома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

//variant 1
// for (let i = 1; i <= 25; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("FizzBuzz")
    //     continue
    // } else if (i % 3 === 0) {
    //     console.log("Fizz")
    //     continue
    // } else if (i % 5 === 0) {
    //     console.log("Buzz")
    //     continue
    // }
    // console.log(i)
// }


//variant 2
// const t0 = performance.now();
// for (let i = 1; i <= 25; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//         continue;
//     }

//     if (i % 3 === 0) {
//         console.log("Fizz")
//         continue;
//     }

//     if (i % 5 === 0) {
//         console.log("Buzz")
//         continue;
//     }

//     console.log(i)
// }
// const t1 = performance.now();
// console.log(t1 - t0)