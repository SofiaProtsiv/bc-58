/*
 * Клас - шаблон за яким будуть створені однотипні об'єкти
 * Примірник/екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор

//TODO:  Створюємо людину за образом

function CreateUser({
  firstName,
  lastName,
  age,
  hairColor,
  eyesColor,
  gender,
}) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  this.gender = gender;

  // this.getUserName = function () {
  //   return this.firstName;
  // };
}

CreateUser.prototype.getUserName = function () {
  return this.firstName;
};
CreateUser.prototype.getUserAge = function () {
  return this.age;
};

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

console.log(user.getUserAge());
console.log(user2.getUserName());
