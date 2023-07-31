/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колббек-функції
// }, initialValue);

/*
? Порахуємо суму масиву чисел
*/
const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (const number of numbers) {
//   sum += number;
// }

const sum = numbers.reduce((sum, number) => sum + number, 0);
// console.log(sum);

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
? Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
*/
const getTotalAmount = (cars) => {
  return cars.reduce((totalCars, car) => totalCars + car.amount, 0);
};
// console.log(getTotalAmount(cars));

/*
? Даний масив об'єктів "tweets", кожен з яких містить ідентифікатор твіта, кількість лайків та список тегів, які використовуються в твіті.
? Завдання полягає в тому, щоб створити новий масив "tags", який міститиме унікальні теги, що зустрічаються у всіх твітах, і вивести його у консоль.
*/
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// даний варіант використання reduce не є доречним
// const uniqueTweets = tweets.reduce((uniqueTweets, tweet) => {
//   for (const tag of tweet.tags) {
//     if (!uniqueTweets.includes(tag)) {
//       uniqueTweets.push(tag);
//     }
//   }

//   return uniqueTweets;
// }, []);

const uniqueTweets = tweets
  .flatMap((tweet) => tweet.tags)
  .filter((el, index, arr) => arr.indexOf(el) === index);

// console.log(uniqueTweets);

const fruits = ["Apple", "Lemon", "Chery", "Lemon", "Lemon", "Chery"];

// const countFruits = {};

// for (const fruit of fruits) {
//   countFruits[fruit] ? (countFruits[fruit] += 1) : (countFruits[fruit] = 1);
// }

// console.log(countFruits);

const countFruits = fruits.reduce((obj, fruit) => {
  obj[fruit] ? (obj[fruit] += 1) : (obj[fruit] = 1);

  return obj;
}, {});

// console.log(countFruits);
