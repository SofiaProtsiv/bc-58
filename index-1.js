"use strict";
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні властивості об'єкта та не власні властивості

const parent = {
  name: "Luce",
  age: 35,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Sofia";
child.hobby = "draw";

console.log(child);
console.log(Object.prototype);
console.log(parent.__proto__);
console.log(parent === child.__proto__);
console.log(child.__proto__.__proto__);

const arr = [1, 2, 3];
console.log(Array.prototype);
console.log(arr.__proto__);

//* Перевірка властивих властивостей obj.hasOwnProperty()
console.log(child.hasOwnProperty("heritage"));

//* Цикл for...in, перебирає всі властивості, і власні та не власні.
for (const key in child) {
  if (Object.hasOwnProperty.call(child, key)) {
    console.log(key);
  }
}
