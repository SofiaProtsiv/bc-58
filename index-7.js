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
?  Example 1.1
? Нехай функція `getModels` повертає масив моделей(поле model) всіх автомобілів.
*/
const getModels = (cars) => { };
// console.table(getModels(cars));

/*
? Example 1.2
? Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним значенням властивості `price` залежно від переданої знижки.
*/
const makeCarsWithDiscount = (cars, discount) => { };
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/*
? Example 1.3
? Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша ніж значення параметра`threshold`
*/
const filterByPrice = (cars, threshold) => { };
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Example 1.4
? Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість onSale яких true.
*/
const getCarsWithDiscount = (cars) => { };
// console.table(getCarsWithDiscount(cars));

/*
? Example 1.5
? Нехай функція `getCarsWithType` повертає масив автомобілів тип яких збігається зі значенням параметра`type`.
*/
const getCarsWithType = (cars, type) => { };
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/*
? Example 1.6
? Нехай функція `getCarByModel` повертає шуканий автомобілів, або ж undefined? якщо такого немає
*/
const getCarByModel = (cars, model) => { };
// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/*
? Example 1.7
? Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за зростанням значення якості`amount`.
*/
const sortByAscendingAmount = (cars) => { };
// console.table(sortByAscendingAmount(cars));

/*
? Example 1.8
? Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів відсортований за зменшенням значення властивості`price`.
*/
const sortByDescendingPrice = (cars) => { };
// console.table(sortByDescendingPrice(cars));

/*
? Example 1.9
? Нехай функція `sortByModel` повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра`order`.
*/
const sortByModel = (cars, order) => { };
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/*
? Example 1.10
? Нехай функція `getTotalAmount` повертає загальну кількість автомобілів(значення властивостей`amount`).
*/
const getTotalAmount = (cars) => { };
// console.log(getTotalAmount(cars));

/*
? Example 1.11
? Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.
*/
const getModelsOnSale = (cars) => { };
// console.table(getModelsOnSale(cars));

/*
? Example 1.12
? Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі(Властивість onSale), відсортованих за зростанням ціни.
*/
const getSortedCarsOnSale = (cars) => { };
// console.table(getSortedCarsOnSale(cars));
