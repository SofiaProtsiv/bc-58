"use strict";
/*
 * Колбеки, функції вищого порядку
 */

function greet(name) {
    console.log(`Welcome ${name}`);
}

function loginUser(name, callback) {
    // console.log(callback === greet)
    // console.log(callback)

    console.log(`Login ${name}....`);
    callback(name);
}

// loginUser("Sofia", greet)
// loginUser("Sofia", greet);

//? Запит на сервер
const BASE_URL = "https://api.github.com/users";

async function fetchUser(username, callback) {
    // console.log(callback === logUser)
    const response = await fetch(`${BASE_URL}/${username}`);
    const data = await response.json();
    callback(data);
}

function logUser(data) {
    console.log(data);
}

// fetchUser("SofiaProtsiv", logUser)

//? Реєстрація подій на сторінці
const input = document.querySelector(".user-email");

function handleInput(e) {
    console.log(e.target.value);
}

// input.addEventListener("input", handleInput)

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/
const numbers = [1, 2, 3, 4, 5];
function each(numbers, callback) {
    const updatedArr = [];

    for (const number of numbers) {
        updatedArr.push(callback(number));
    }

    return updatedArr;
}

function multi(number) {
    return number * 2;
}
function add(number) {
    return number + 2;
}
function logElements(number) {
    return number;
}

// console.log(each(numbers, multi));
// console.log(each(numbers, add));
// console.log(each(numbers, logElements))

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/

function createProduct(product, callback) {
    const updatedProduct = {
        ...product,
        id: new Date(),
    };

    callback(updatedProduct);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice({ price, quantity }) {
    console.log(price * quantity);
}

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

const TRANSACTION_LIMIT = 1000;

const account = {
    username: "Sofia",
    balance: 1000,
    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
            return;
        }

        if (amount > this.balance) {
            onError(`Amount can't exceed account balance of ${this.balance} credits`);
            return;
        }

        this.balance -= amount;
        onSuccess(`Account balance: ${this.balance}`);
    },
    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
            return;
        }

        if (amount <= 0) {
            onError(`Amount must be more than 0 credits`);
            return
        }

        this.balance += amount;
        onSuccess(`Account balance: ${this.balance}`);
    },
};

function handleSuccess(message) {
    console.log(message);
}

function handleError(message) {
    console.log(message);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
