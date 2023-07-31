/*
 *  Метод sort()
 */

// * Сортування чисел
const numbers = [
  2, 1, 4, 0, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 4, 7, 3, 75,
];

// console.log(numbers.sort());
// console.log([...numbers].sort());

// * Сортування рядків
// ? Виконайте сортування масиву назв моніторів у aлфавітному та зворотному порядку.

const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
// monitors.sort();
// console.log([...monitors].sort());

//? Сортування чисел та рядків за умовою
const AZNumbers = [...numbers].sort((a, b) => a - b);
const ZANumbers = [...numbers].sort((a, b) => b - a);

const AZMonitors = [...monitors].sort((a, b) => a.localeCompare(b));
const ZAMonitors = [...monitors].sort((a, b) => b.localeCompare(a));

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
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований по збільшенню значення властивості amount.
*/
const sortByAscendingAmount = (cars) => {
  return [...cars].sort((a, b) => b.amount - b.amount);
};
// console.table(sortByAscendingAmount(cars));

/*
?Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.
*/

const sortByDescendingPrice = (cars) => {
  return [...cars].sort((a, b) => b.price - a.price);
};
// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/

const sortByModel = (cars, order) => {
  return [...cars].sort((a, b) => {
    if (order === "asc") {
      return a.model.localeCompare(b.model);
    }
    return b.model.localeCompare(a.model);
  });
};

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));
