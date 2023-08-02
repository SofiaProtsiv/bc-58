"use strict";
/*
 * Успадкування з extends та super
 */

class User {
  #login;
  #email;

  constructor({ firstName = "unknown", lastName, age, login, email } = {}) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }
}

const user = new User({
  firstName: "Mable",
  lastName: "Cohen",
  age: 30,
  login: "testLogin",
  email: "weni@owva.ai",
});

console.log(user);

class Manager extends User {
  constructor({
    numberOfSales,
    firstName = "unknown",
    lastName,
    age,
    login,
    email,
  }) {
    super({ firstName, lastName, age, email, login });

    this.numberOfSales = numberOfSales;
  }

  doManagerWork() {
    console.log(`${this.firstName} do ${this.numberOfSales} number of Sales`);
  }
}
const manager = new Manager({
  firstName: "Addie",
  lastName: "Burgess",
  age: 20,
  login: "someLogin",
  email: "uhmop@balninih.sd",
  numberOfSales: 20,
});

// console.log(manager);
// console.log(manager.getFullName());
// manager.doManagerWork();

class Developer extends User {
  constructor({
    completedProjects,
    firstName = "unknown",
    lastName,
    age,
    login,
    email,
  }) {
    super({
      firstName,
      lastName,
      age,
      login,
      email,
    });

    this.completedProjects = completedProjects;
  }

  doDeveloperWork() {
    console.log(
      `${this.firstName} do ${this.completedProjects} number of projects`
    );
  }
}
const developer = new Developer({
  firstName: "Bertha",
  lastName: "Byrd",
  age: 22,
  login: "myLogin",
  email: "tudeoh@ede.fm",
  completedProjects: 45,
});

console.log(developer.getFullName());
developer.doDeveloperWork();
