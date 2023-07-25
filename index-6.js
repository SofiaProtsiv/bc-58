/* 
* Посилальний тип
*/

// -----------------------------------------------------------------------//

// ПРИМІТИВИ ПЕРЕДАЮТЬСЯ ПО ЗНАЧЕННЮ

// -----------------------------------------------------------------------//

let a = 10
let b = a

console.log(a, b)

a = 30

console.log(a, b)

// -----------------------------------------------------------------------//

// СКЛАДНІ ТИПИ ДАНИХ ПЕРЕДАЮТЬСЯ ЗА ПОСИЛАННЯМ

// -----------------------------------------------------------------------//

// приклад з масивами
const arr1 = [1, 2, 3]
const arr2 = arr1
console.log(arr1 == arr2) // true, бо однакове посилання
console.log(arr1 === arr2) // true,  бо однакове посилання

[1, 2, 3] === [1, 2, 3] // false, бо це 2 різні комірки в памяті

const copyArr1 = arr1.slice(); // Поверхнева копія масива
const copyArr2 = [].concat(arr1); // Поверхнева копія масива
const copyArr3 = [...arr1]; // Поверхнева копія масива
const copyArr4 = Array.from(arr1);// Поверхнева копія масива

const deepArrCopy = structuredClone(arr1) // Глибока копія масива

// -----------------------------------------------------------------------//

// приклад з об'єктами

const obj1 = { a: 1, b: 1, c: [1, 2, 3] }
const obj2 = obj1

console.log(obj1 == obj2) // true, бо однакове посилання
console.log(obj1 === obj2) // true, бо однакове посилання

// { a: 1, b: 1 } === { a: 1, b: 1 }// false, бо це 2 різні комірки в памяті

const obj3 = Object.assign(obj1, obj2); // Об'єднання
const obj4 = { ...obj1, ...obj2 } // Об'єднання

const copyObj1 = Object.assign({}, obj1); // Поверхнева копія об'єкта
const copyObj2 = { ...obj1 } // Поверхнева копія об'єкта

const deepObj1 = structuredClone(obj1) // Глибока копія об'єкта

console.log("deepObj1 ===> before", deepObj1)
deepObj1.a = 100
deepObj1.c.push("Hello")
console.log("deepObj1 ===> after", deepObj1)
console.log("obj1 ===> ORIGINAL", obj1)