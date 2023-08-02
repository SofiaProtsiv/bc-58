"use strict";
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

/*
 * Властивості класу доступні на екземплярах
 * Методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, отримати доступ до них можна за допомогою методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на самому класі
 * Статичні методі доступні лише на самому класі
 * Статичні приватні властивості доступні на сомому класі, всередині класу
 * Статичні приватні методи доступні на сомому класі, всередині класу
 */

class CreateUser {
  static publicEmail = "admit@gmail.com";
  static #privatEmail = "privatAdmit@gmail.com";
  static isAdmin = false;

  #email;

  constructor({
    firstName,
    lastName,
    age,
    hairColor,
    eyesColor,
    gender,
    email = "unknown",
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#email = email;

    // this.getName = function () {
    //   return this.firstName;
    // };
  }

  get privatEmail() {
    return CreateUser.#privatEmail;
  }

  static changeStatus() {
    // this.isAdmin = !this.isAdmin;
    CreateUser.isAdmin = !CreateUser.isAdmin;
  }

  getName() {
    return this.firstName;
  }

  getEmail() {
    return this.#email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }

  sayHello() {
    if (this.#checkIsUserMale()) {
      return `Hello, MR ${this.firstName}`;
    }
    return `Hello, Misis ${this.firstName}`;
  }

  #checkIsUserMale() {
    return this.gender === "male";
  }
}

const user = new CreateUser({
  firstName: "Jeff",
  lastName: "Smith",
  age: 30,
  hairColor: "brown",
  eyesColor: "brown",
  gender: "male",
});

const user2 = new CreateUser({
  firstName: "Sofia",
  lastName: "Prostiv",
  age: 30,
  hairColor: "blonde",
  eyesColor: "green",
  gender: "female",
});

// console.log(user.sayHello());

// console.log(user2.sayHello());

// console.log(user);

// variant 1
// console.log(user.getEmail());
// user.changeEmail("jeff@gmail.com");
// console.log(user.getEmail());

// variant 2
// console.log(user2.email);
// user2.email = "sofia@gmail.com";
// console.log(user2.email);

console.log(user.privatEmail);
console.log(CreateUser.publicEmail);
console.log(CreateUser.isAdmin);
CreateUser.changeStatus();
console.log(CreateUser.isAdmin);
