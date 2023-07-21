"use strict";

/*
 * Передача за посиланням та за значенням
*/

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/
// let a = 10;
// let b = a;
// console.log("a", a);
// console.log("b", b);
// a = 20;
// console.log("======")
// console.log("a", a);
// console.log("b", b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Вибачте в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/
// const arr1 = [1, 2, 3]
// const arr2 = arr1;
// const arr3 = [1, 2, 3]
// console.log("arr1", arr1)
// console.log("arr2", arr2)
// console.log(arr1 === arr2)
// console.log(arr1 === arr3)
// arr1.push(4)
// console.log("======")
// console.log("arr1", arr1)
// console.log("arr2", arr2)

/*
 *  Масиви: літерали массива, елементи, індексація, довжина
 *  Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */
// Масив - структура даних для зберігання і маніпулювання
// колекцією індексованих значень. Використовується для зберігання
// впорядкованих колекцій даних, наприклад, списку курортів, товарів, клієнтів в готелі тощо.
/*

? Створіть масив genres з елементами Jazz і Blues.
? Додайте «Рок-н-рол» до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */
const genres = ["Jazz", "Blues"];
const genres2 = ["Country", "Reggy"];

// console.log(Array.prototype)
// console.log(genres)
// console.log(genres[0])
// console.log(genres[genres.length - 1])
// console.log(genres.length);

// genres.shift(); // МУТУЮЧИЙ
// genres.pop(); // МУТУЮЧИЙ
// genres.unshift("Country", "Reggy") // МУТУЮЧИЙ
// genres.push("Рок-н-рол", "Pop") // МУТУЮЧИЙ
// genres.splice(1, 2) // МУТУЮЧИЙ (removing)
// genres.splice(1, 2, "Hello") // МУТУЮЧИЙ (replace)

const commonGenres = genres.concat(genres2) // НЕМУТУЮЧИЙ
const slicesGenres = genres.slice(1); // НЕМУТУЮЧИЙ

// 4 СПОСОБИ ПОВЕРХНЕВОЇ КОПІЇ МАСИВА
const copy1 = genres.slice()
const copy2 = genres.concat([])
const copy3 = [...genres]
const copy4 = Array.from(genres);

// const newArr = [genres[0], genres[genres.length - 1]]
// const newArr = [].concat(genres.shift(), genres.pop())
// console.log(newArr)

/*
 * Перебір масиву циклами for и for...of
 */

// Коли треба індекс елемента
for (let i = 0; i < genres.length; i++) {
    // console.log(genres[i])
}

// Коли індекс елемента неважливий
for (const genre of genres) {
    // console.log(genre)
}

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i++) {
    // console.log(`${i + 1}: ${fruits[i]}`)
}

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

const numbers = [2, 17, 94, -20, -50, 0, 23, 1, 37];
// variant 1
// let smallestNum = 0;
// for (const number of numbers) {
//     if (number < smallestNum) {
//         smallestNum = number
//     }
// }

// variant 2
// let smallestNum = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNum) {
//         smallestNum = number
//     }
// }

// variant 3
// let smallestNum = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < 0) continue;

//     if (numbers[i] < smallestNum) {
//         smallestNum = numbers[i]
//     }
// }
// console.log(smallestNum)

// variant 4
// let smallestNum = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallestNum && numbers[i] > 0) {
//         smallestNum = numbers[i]
//     }
// }
// console.log(smallestNum)

// variant 5
// const minNum = Math.min(...numbers)
// console.log(minNum)

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

const salaries = [200, 450, 600, 150, 300];

let sumOfAllSalaries = 0;

for (const salary of salaries) {
    sumOfAllSalaries += salary;
}

// console.log(sumOfAllSalaries)

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

const managerSalaries = [1000, 1500, 2500, 4000, 5000];
const developersSalaries = [8000, 15000, 40000];

// const allSalaries
//     managerSalaries.concat(developersSalaries);
const allSalaries = [...managerSalaries, ...developersSalaries]

let sum = 0;

for (const salary of allSalaries) {
    sum += salary
}

// console.log(sum)


/*
? Напиши скрипт пошуку найдовшого слова у реченні.
? Використовуйте цикл для вирішення задачі.
*/
const sentance = "An array we can store multiple values at once".split(" ") // multiple

let theLongestWord = sentance[0]

for (let i = 1; i < sentance.length; i++) {
    if (theLongestWord.length < sentance[i].length) {
        theLongestWord = sentance[i]
    }
}

// console.log(theLongestWord)

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

const names = "Jacob, William, Solomon, Artemis".split(", ");
const phones = "89001234567, 890055566377, 890055566377, 890055566377".split(", ");

for (let i = 0; i < names.length; i++) {
    // console.log(`${names[i]}: ${phones[i]}`)
}


/*
Напишіть скрипт, яка перевіряє екзамен у студентів. Перший вхідний масив містить правильні відповіді на іспиті, наприклад, ["a", "a", "b", "d"]. Другий масив називається "answers" і містить відповіді студента. Обидва масиви не порожні і мають однакову довжину. Поверніть оцінку для цього масиву відповідей, виводячи +4 за кожну правильну відповідь, -1 за кожну неправильну відповідь і +0 за кожну пропущену відповідь (порожній рядок). Якщо оцінка < 0, виведіть 0.
*/

// const answers = ["a", "a", "b", "b"];
// const responses = ["a", "c", "b", "d"]

const answers = ["a", "a", "c", "b"];
const responses = ["a", "a", "b", ""];

let result = 0 // → 7

// for (let i = 0; i < answers.length; i++) {
//     if (!responses[i]) continue;

//     if (answers[i] === responses[i]) {
//         result += 4
//         continue;
//     }

//     if (answers[i] !== responses[i]) {
//         result -= 1
//     }
// }

// for (let i = 0; i < answers.length; i++) {
//     if (!responses[i]) continue;

//     switch (answers[i]) {
//         case responses[i]:
//             result += 4;
//             break;
//         default:
//             result -= 1;
//             break;
//     }
// }

// console.log(result)

/*
 Напишіть скрипт, який очищає масив від небажаних значень, таких як false undefined, пусті рядки, нуль, null.
*/
const arr = [0, 1, false, 2, [], undefined, '', 3, "sofia", null];

const updatedArr = [];

for (const item of arr) {
    if (item) updatedArr.push(item);
}

// console.log(updatedArr)

// if (!email) console.log("enter email")
// if (!isLogin) console.log("login please")
// if (![].length) console.log("no matches")

/*
? Напишіть код, який поверне суму рядка
*/
const numbersArr = String(56349).split("");
let digitSum = 0;
for (const number of numbersArr) {
    digitSum += Number(number)
}
console.log(digitSum)

// console.log([...number]) // коли треба розбити посимвольно
// console.log(number.split("")) // коли треба розбити посимвольно
// console.log([...number]) // коли треба розбити по пробілу або по іншому сепаратору такий спосіб НЕ ПІДІЙДЕ
