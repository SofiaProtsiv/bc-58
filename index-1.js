"use strict";

/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 * Якщо функція визивається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція визивається без контекста this --> undefined
 * При передачі функції як callback контекст не зберігається
 * Для стрілкової функції важливо як ми її СТВОРИМО, а не як викличемо!
 * this  в сктрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція визивається без контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції (не стрілочної) this стрілочної функції буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах
const user = {
  firstName: "Sofia",
  lastName: "Protsiv",
  getName() {
    // console.log(this.name);
    return this.firstName;
  },
  getThis() {
    console.log(this);
  },
};

// const anotherUser = Object.create(user);
// anotherUser.name = "Max";
// anotherUser.getThis();
// user.getName();

//TODO: Розглянемо як це поводиться у звичайних функціях (суворий, не суворий режим)
//? Function declaration
function fn() {
  console.log(this);
}

// fn();

//? Function expression
const fn1 = function () {
  console.log(this);
};

// fn1();

//? Arrow function
const fn2 = () => {
  console.log(this);
};

// fn2();

//TODO: Присвоєння функції як методу об'єкту
function getFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

// const getFullName = () => {
//   console.log(`${this.name} ${this.lastName}`);
// };

user.getFullName = getFullName;

// user.getFullName();
// user.getThis();

//TODO: Виклик методу об'єкта без контексту

const userFullName = user.getFullName;
// userFullName();

//TODO: This в callback функціях
function sayHello(callback) {
  console.log(`Hello, ${callback()}`);
}

// sayHello(user.getName);

//TODO: this у стрілочних функціях. Стрілочні функції не мають свого this, this у стрілочних функціях завжди посилається на батьківський this.

user.makeGreet = function () {
  const makeGreet = () => {
    // console.log(this.firstName);
    console.log(`Hello, ${this.firstName}`);
  };

  makeGreet();
};

user.makeGreet();

/*
? Яким буде результат виконання цього коду?
*/

// let anotherUser = {
//   name: "Джон",

//   go() {
//     console.log(this);
//     const arrow = () => console.log("this in arrow function", this);
//     arrow();
//   },
// };

// const goFn = anotherUser.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const anotherUser = {
//   name: "Luis",
//   age: 30,
//   makeUser() {
//     return {
//       name: "Mango",
//       ref: this.name,
//     };
//   },
// };

// const makeUser = function () {
//   console.log(this);
//   return {
//     name: "Джон",
//     ref: this,
//   };
// };
// makeUser();
// const mango = anotherUser.makeUser();
// console.log(mango); // obj
// console.log(anotherUser.ref); //undined
// console.log(anotherUser.ref.name); //error
/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     },
//   };
// }

// let anotherUser = makeUser();

// // console.log(anotherUser);
// console.log(anotherUser.name);
// console.log(anotherUser.ref());
// console.log(anotherUser.ref().name);
