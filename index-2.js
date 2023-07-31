/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колббек-функції
// });

//? Помножте всі числа на 2
const numbers = [1, 2, 3, 4, 5];
// const acc = [];

// for (const number of numbers) {
//   acc.push(number * 2);
// }

// console.log(acc);

// const result = numbers.map((number) => {
//   return number * 2;
// });

const result1 = numbers.map((number) => number * 2);

// console.log(result);

/*
?Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить довжини рядків:
*/

const wordsArr = ["Існує", "життя", "на", "Марсі"];

function getElementsLength(array) {
  // const newArr = array.map((item) => item.length);

  return array.map((item) => item.length);
}
const result = getElementsLength(wordsArr); // [5, 5, 2, 5]
// console.log(result);

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

const farengeit = celsius.map((el) => el * 1.8 + 32);

// console.log(farengeit);

// const ownMap = function (arr, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(callback(arr[i], i, arr));
//   }
//   return newArr;
// };

// ownMap(celsius, (el) => el * 1.8 + 32);

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
? Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.
*/

function getModels(cars) {
  return cars.map((car) => car.model);
}

// console.log(getModels(cars));

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price залежно від переданої знижки.
*/

const makeCarsWithDiscount = (vehicles, discount) => {
  return vehicles.map((vehicle) => {
    vehicle.price = vehicle.price - vehicle.price * discount;

    return vehicle;
  });
};

// console.log(makeCarsWithDiscount(cars, 0.2))

/*
? Дано масив об'єктів "students", кожен з яких містить ім'я студента та список курсів, на які він підписаний.
? Завдання полягає в тому, щоб створити новий масив "courses", який містить усі курси, на які підписані студенти, і вивести його у консоль.
*/
const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const courses = students.flatMap((student) => student.courses);

const uniqueCourses = [...new Set(courses)];
// console.log(uniqueCourses);
