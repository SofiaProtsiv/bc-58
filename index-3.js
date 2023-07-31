"use strict";
/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колббек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/
// const numbers = [1, 2, 3, 4, 5, 6];
// const acc = [];

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     acc.push(number);
//   }
// }

// console.log(acc);

// const filteredArr = numbers.filter((number) => number % 2 === 0);

// console.log(filteredArr);

/*
? Відфільтруємо масив, залишивши в ньому лише додатні числа:
*/
const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

const newArr = numbers.filter((number) => number > 0);
// console.log(newArr);

/*
? Відфільтруйте масив heroes за ключем об'єкта franchise.
*/

const heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" },
];

const filteredByFranchise = (heroesArr, franchis) => {
  return heroesArr.filter((hero) => hero.franchise === franchis);
};
// console.log(filteredByFranchise(heroes, "Marvel"));

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких менше ніж значення параметра threshold.
*/

const filterByPrice = (cars, threshold) => {
  return cars.filter((car) => car.price > threshold);
};
// console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

const getCarsWithDiscount = (cars) => {
  return cars.filter((car) => car.onSale);
};

console.log(getCarsWithDiscount(cars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається із значенням параметра type.
*/

const getCarsWithType = (cars, findType) => {};

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// ? Залишити тільки унікальні числа
const numbs = [1, 2, 3, 3, "Hello", 2, 1, 4, 5, 6, 4];

// variant 1

const uniqueNumbers = numbs.filter((el, index, arr) => {
  return arr.indexOf(el) === index;
});

// console.log(uniqueNumbers);

// variant 2
// console.log([...new Set(numbs)]);
