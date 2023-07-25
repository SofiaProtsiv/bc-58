"use strict";

/*
? Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів та ім'я ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.
*/

const users = [
    {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        age: 22,
        language: "JavaScript",
    },
    {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 30,
        language: "Python",
    },
    {
        firstName: "Emma",
        lastName: "B.",
        country: "Norway",
        age: 19,
        language: "Java",
    },
];

function getAllPropValues(users, key) {
    const values = [];
    for (const user of users) {
        if (!user[key]) continue;

        values.push(user[key]);
    }
    return values;
}

// console.log(getAllPropValues(users, "firstName")); // ["Mark", "Victoria", "Emma"]
// console.log(getAllPropValues(users, "language")); // ["JavaScript", "Python", "Java"]
// console.log(getAllPropValues(users, "hobby")); // []

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

const stones = [
    { name: "Ізумруд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 3 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
    let price = 0;
    for (const stone of stones) {
        if (stone.name === stoneName) {
            price = stone.quantity * stone.price;
            return price;
        }
    }
};
// console.log(calcTotalPrice(stones, 'Діамант'));

/*
? Отримати список моделей задопомогою функції getModels:
? Замінити назву моделі задопомогою функції changeModel
? Отримати загальну ціну всіх машин за допомогою функції getTotalPrice
*/

const vehicles = [
    { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
    { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
    { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
    { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
    { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
    { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
    { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
    { make: "Ford", model: "F-150", type: "truck", price: 27110 },
    { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
    { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];
function getModels(vehicles) {
    const models = [];
    for (const vehicle of vehicles) {
        models.push(vehicle.model);
    }
    return models;
}

function changeModel(vehicles, oldModelName, newModelName) {
    const copyVehicles = structuredClone(vehicles);

    for (const vehicle of copyVehicles) {
        if (vehicle.model === oldModelName) {
            vehicle.model = newModelName;
        }
    }

    return copyVehicles;
}
function getTotalPrice(vehicles) {
    let sum = 0;
    for (const vehicle of vehicles) {
        sum += vehicle.price;
    }
    return sum;
}

// console.table(getModels(vehicles))

// changeModel(vehicles, "Fusion", "AAAAAA");
// changeModel(vehicles, "F-150", "BBBBBB");
// console.table(changeModel(vehicles, "Mazda 6", "Hello world"))

// console.log(getTotalPrice(vehicles))
/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзацький лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт з властивостями: id, type та amount
*/

const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const account = {
    // Поточний баланс рахунку
    balance: 0,
    // Початковий ID для транзакції
    startId: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) { },

    // Генерація id для транзакції
    generateId() { },

    /*
     * Метод, який відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) { },

    /*
     * Метод, який відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * Після чого додає його в історію транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) { },

    /*
     *Метод повертає поточний баланс
     */
    getBalance() { },

    /*
     * Метод шукає та повертає об'єкт транзації по id
     */
    getTransactionDetails(id) { },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(typeOperation) { },
};

// account.deposit(200);
// account.deposit(300);
// account.deposit(500);
// account.deposit(1500);
// account.deposit(2500);
// account.withdraw(700);
// account.withdraw(200);

// console.log('Balance', account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionDetails(10));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

/*
? Є масив products і в ньому дублюються елементи. Створи функцію sumUpTheInstances, яка буде повертати об'єкт, який буде місти властивість, де ключем буде унікальне значення, а значенням буде число, скільки раз воно повторювалось у масиві.
? Очікуваний результат: const obj = { apple: 2, banana: 2, avocado: 1, cherry:1 }
*/
const obj = { apple: 2, banana: 2, avocado: 1, cherry: 1 };

const products = [
    "apple",
    "banana",
    "banana",
    "apple",
    "avocado",
    "cherry",
    "banana",
];

function sumUpTheInstances() {
    let sum = {};

    for (const product of products) {
        // if (!sum[product]) {
        //     sum[product] = 1
        // } else {
        //     sum[product] += 1
        // }

        sum[product]
            ? (sum[product] += 1)
            : (sum[product] = 1);
    }

    return sum;
}
console.log(sumUpTheInstances(products));
