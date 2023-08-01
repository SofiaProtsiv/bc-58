"use strict";
/*
 * Методи функції call и apply
 */

// * Функції це об'єкти зі своїми властивостями та методами

// * call і apply

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(`${message} ${this.firstName} ${this.lastName}, ${num}`);
//   return 1;
// };

// showFullName();

// const user = {
//   firstName: "Yulia",
//   lastName: "Ivanova",
//   age: 30,
//   getName() {
//     return this.firstName;
//   },
// };
// * РІЗНИЦЯ ЛИШЕ В ПЕРЕДАЧІ АРГУМЕНТІВ, ФУНКЦІІОНАЛ ОДНАКОВИЙ
// call({}, arg1, arg2)
// apply({}, [arg1, arg2]);

// const args = ["Hello", 10];
// showFullName.call(user, ...args); // showFullName.call(user, "Hello", 10);
// showFullName.apply(user, args); // showFullName.apply(user, ["Hello", 10]);

// const fn = showFullName.call(user, ...args);
// console.log(fn);
// fn();

// * CALL i APPLY не використовуються для збереження контексту при передачі метода обєкта як колбек функції
// function sayHello(callback) {
//   console.log(`Hello, ${callback()}`);
// }
// sayHello(user.getName.call(user));
// sayHello(user.getName.apply(user));

//* bind

/*
 * Якщо прив'язати контекст через bind при передачі функції як callback контекст зберігається
 */

// const showFullName = function (message) {
//   console.log(`${message}, ${this.firstName} ${this.lastName}`);
// };

// const kiwi = {
//   firstName: "Kiwi",
//   lastName: "Kiwich",
//   age: 24,
// };

// const mango = {
//   firstName: "Mango",
//   lastName: "Mangovich",
//   age: 38,
// };
//variant 1
// showFullName.bind(kiwi, "Hello")();

//variant 2
// const showKiwiFullName = showFullName.bind(kiwi, "Hello");
// showKiwiFullName();

// const showMangoFullName = showFullName.bind(mango, "Hello");
// showMangoFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const anotherUser = {
//   firstName: "Sofia",
//   lastName: "Protsiv",
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// const showName = user.getFullName.bind(user);
// makeMessage(user.getFullName.bind(anotherUser));
// makeMessage(showName);

/*
? Що виведе цей код?
*/

// const f = function (message) {
//   console.log(this.name);
// };

// const user = {
//   name: "Вася",
// };

// const anotherUser = {
//   name: "Петя",
// };

// const copyFunc = f.bind(anotherUser).bind(user);

// copyFunc();

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль і потім викликати user.loginOk/loginFail в залежністі від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

const checkPassword = function (userPassword, ok, fail) {
  const password = "rockstar";

  if (password === userPassword) {
    console.log("Password Ok!");
    ok();
  } else {
    console.log("Password not Ok!");
    fail();
  }
};

const user = {
  name: "Вася",

  loginOk() {
    console.log("this", this);
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

// checkPassword("rockstar", user.loginOk.bind(user), user.loginFail.bind(user));

const counter = {
  count: 0,
  incrementCount() {
    this.count += 1;
    text.textContent = this.count;
  },
  decrementCount() {
    this.count -= 1;
    text.textContent = this.count;
  },
};

const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const text = document.querySelector("p");

buttonPlus.addEventListener("click", counter.incrementCount.bind(counter));
buttonMinus.addEventListener("click", counter.decrementCount.bind(counter));
