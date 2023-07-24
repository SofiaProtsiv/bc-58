"use strict";
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// HOISTING - це механізм JavaScript, в якому змінна var і function declaration, піднімається вгору своєї області видимості перед тим, як код буде виконано.

// function declaration
// consoleMessage("hello")
function consoleMessage(message) {
    console.log(message);
}

// function expression
const calculateSum = function (num1 = 0, num2 = 0) {
    return num1 + num2;
};
// const sumResult = calculateSum(2, 8);
// console.log(sumResult)

/*
? Напиши функцію consoleMessage, яка виводитиме у консоль повідомлення, яке було передане при виклику функції ту кількість раз, яку також передали аргументом при виклику.
? Якщо ж щось не передано, то число по дефолту має дорівнювати 10, а повідомлення має бути "Default message"
*/
function consoleMessage(message = "Default message", count = 10) {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}

// consoleMessage("Hello world", 3);
// consoleMessage("Java Script");
// consoleMessage(undefined, 5);

/*
 * Порядок виконання коду та стек викликів функцій
 */
// function task1() {
//     console.log("before task 2");
//     task2();
//     console.log("after task 2");
//     console.log("Completed task 1");
// }
// function task2() {
//     console.log("before task 3");
//     task3();
//     console.log("after task 3");
//     console.log("Completed task 2");
// }

// function task3() {
//     console.log("Completed task 3");
// }
// console.log("before task 1");
// task1();
// console.log("after task 1");

/*
 * Порядок виконання коду та стек викликів функцій
 */
// function foo() {
//     console.log("foo - start");
//     console.log("foo - 1");
//     baz();
//     console.log("Code back 232");
//     bar();
//     console.log("Code back 234");
//     console.log("foo - end");
// }
// function baz() {
//     console.log("baz - start");
//     console.log("baz - 2");
//     console.log("baz - end");
// }
// function bar() {
//     console.log("bar - start");
//     console.log("bar-3");
//     console.log("bar - end");
// }

// foo();

/*
 * Псевдомасив arguments
 */

const fn1 = () => { }; // arguments НЕМАЄ

function fn2() {
    console.log(arguments); // arguments Є
}

const fn3 = function () {
    console.log(arguments); // arguments Є
};

// VARIANT 1 WITH ARGUMENTS
const countSum = function () {
    console.log(Array.from(arguments)); // 1 СПОСІБ КОНВЕРТАЦІЇ ДО МАСИВУ
    console.log([...arguments]); // 2 СПОСІБ КОНВЕРТАЦІЇ ДО МАСИВУ

    let sum = 0;

    for (const number of Array.from(arguments)) {
        sum += number;
    }

    return sum;
};

// const result = countSum(1, 2, 3, 4, 5, 6);
// console.log(result)

// VARIANT 2 WITH REST OPERATOR
function countSumm(...numbers) {
    // (...) rest - збирає, альтернатива псевдомасиву arguments, так як повератає уже справжній масив

    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }

    return sum;
}
// console.log(countSumm(1, 2, 3, 4, 5, 6))

/*
 * Паттерн «Рання повернення»
 */
/*
? Напиши функцію addNumbers(), яка приймає набір випадкових значень, які можуть бути як числами так і рядками. Функція повинна повертати суму чисел.
*/

function addNumbers(...values) {
    if (values.length === 0) {
        console.log("NO DATA");
        return;
    }

    let sum = 0;

    for (const value of values) {
        if (typeof value === "string") break;

        sum += value;
    }

    return sum;
}

// addNumbers();
// addNumbers("d", "a", "g", 1, 2, 1, 5, 14, 15, 48, 79, "d", "a", "g");

/*
 *  ПРАКТИКА
 */

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? Усі аругменти будуть лише числами.
*/

function calcAverage() {
    const numbers = Array.from(arguments);

    let sum = 0;
    let count = 0;

    for (const number of numbers) {
        // varian 2
        if (typeof number === "number") {
            count += 1;
            sum += number;
        }

        // varian 1

        // if (typeof number === "string" || !number) continue;
        // count += 1
        // sum += number
    }

    return sum / count;
}
// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2
// console.log(calcAverage(1, null, 2, "hello", 3)); // 2

/*
? Напишіть функцію для перетворення імені в ініціали. Ви отримаєте ім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
? `Sam Harris => S.H`
? `Patrick Feeney => P.F`
*/
function abbrevName(fullname) {
    const firstName = fullname.split(" ")[0];
    const lastName = fullname.split(" ")[1];

    // console.log(firstName[0])
    // console.log(firstName.charAt(0))
    // console.log(firstName.slice(0, 1))

    const abbrev = `${firstName[0]}.${lastName[0]}.`;
    return abbrev;
}

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feeney"));

/*
? Напишіть функції для роботи з колекцією todos(завдання/плани):
? showTodos() - повертає всю колекцію
? addTodo(todo) - додає завдання до кінця колекції
? removeTodo(todo) - видаляє завдання із колекції
? updateTodo(oldTodo, newTodo) – оновлює старий текст завдання на нове (повністю новий текст або ж була помилка в слові і тд)
*/

// 1 функція === 1 задача

const todos = ["Прочитати конспект по модулю 2", "Зробити ДЗ"];

function showTodos() {
    return todos;
}

// VARIANT 1 (коли одна задача приходить)
function addTodo(todo) {
    todos.push(todo);

    return showTodos();
}
// console.log(addTodo("Купити молоко"));

// VARIANT 2 (коли багато одразу задач приходить)
function addTodo(...tasks) {
    todos.push(...tasks);

    return showTodos();
}

function removeTodo(todo) {
    const todoIndexToRemove = todos.indexOf(todo);

    todos.splice(todoIndexToRemove, 1);

    return showTodos();
}

function updateTodo(oldTodo, newTodo) {
    const todoIndexToUpdate = todos.indexOf(oldTodo);

    todos.splice(todoIndexToUpdate, 1, newTodo);

    return showTodos();
}

// console.log(showTodos());
// console.log(addTodo("Подивитися Майстер Шеф", "Подивитися лекцію"));
// console.log(addTodo("Купити молоко"));

// console.log(
//     updateTodo("Подивитися Майстер Шеф", "Подивитися додатковий матеріал по JS")
// );

// console.log(removeTodo("Купити молоко"));

/*
? Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:

 - Проходити перевірку на довжину від 4 до 16-ти символів включно 
 - Бути унікальним, тобто бути відсутнім в масиві logins 
 
? Розбий завдання на підзадачі за допомогою функцій: 

? Напиши функцію isLoginValid(login), в якій перевір 
- кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

? Напиши функцію isLoginUnique(allLogins, login), яка 
- приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

? Напиши функцію addLogin(allLogins, login) яка:
Приймає новий логін і масив всіх логінів як параметри
Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid:
Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів.
Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique:
Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'

🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique і isLoginValid.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {
    // if (login.length >= 4 && login.length <= 16) {
    //     return true
    // }
    // return false

    // login.length >= 4 && login.length <= 16 ? true : false;

    return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(login) {
    // if (logins.indexOf(login) === -1) {
    //     return true
    // }
    // return false;

    return logins.includes(login);
}

function addLogin(logins, login) {
    const is_login_unique = isLoginUnique(login);
    const is_login_valid = isLoginValid(login);

    // Так можна робити, але раннє повернення краще
    // if (is_login_unique) {
    //     return 'Такий логін уже використовується!'
    // } else if (!is_login_valid) {
    //     return 'Помилка! Логін повинен бути від 4 до 16 символів'
    // } else {
    //     logins.push(login)
    //     return 'Логін успішно доданий!'
    // }

    if (is_login_unique) {
        return "Такий логін уже використовується!";
    }

    if (!is_login_valid) {
        return "Помилка! Логін повинен бути від 4 до 16 символів";
    }

    logins.push(login);
    console.log(logins);
    return "Логін успішно доданий!";
}

// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'

/*
? Очистити масив від небажаних значень
*/

function clearArray(arr, elToDelete) {
    const updatedArr = [];

    for (const el of arr) {
        // if (el === elToDelete) continue;
        // updatedArr.push(el)

        if (el !== elToDelete) updatedArr.push(el)
    }

    return updatedArr;

}
// console.log(clearArray([1, 5, 2, 4, 8, 5, 5], 5))


/*
?  Написати функцію, яка рахуватиме кількість голосних букв у реченні
*/

function countVowels(str) {
    const vowels = ["a", "o", "i", "u", "y", "e"];
    const normalizedStr = str.toLowerCase();
    let count = 0;

    for (const char of normalizedStr) {
        if (vowels.includes(char)) {
            // count++
            count += 1
        }
    }

    return count
}

console.log(countVowels("Hello world! I love JS")) // 6



// Коли потрібно повернути унікальні значення
console.log([...new Set([1, 2, 4, 4, 6, 3, 4, 8])])