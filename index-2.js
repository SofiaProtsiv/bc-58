/*
 * Стрілки, явне - неявне повернення, arguments, повернення об'єкта
 */
//? 3 способи створення функції

function fn() {
    console.log("fn");
}

// fn()

const fn1 = function () {
    console.log("hello");
};

// fn1()

//? Без параметрів
const fn2 = () => "Mabgo";

// const fn2 = () => {
//     return "MAngo"
// }

// const result = fn2()
// console.log(result)

//? Один параметр
// const hello = name => console.log(name)

//? Два і більше параметрів
// const hello = (name, age) => console.log(name, age)

//? Деструктиризація
// const hello = ({ name, age }) => console.log(name, age)
// const hello = ({ name }) => console.log(name)

const calculateSum = () => {
    let sum = 0;
    for (const num of [1, 2]) {
        sum += num;
    }
    return sum;
};

// console.log(calculateSum())

//? arguments

// Стрілкова функція не має прототипу, не унаслідувала функціоналість від батька Function
const max = (...number) => {
    console.log(number);
};

max(1, 2, 3, 4, 5);

//? Повернення об'єкту
// Функція createObj створює новий об'єкт з унікальним id (за допомогою Date.now()) та властивостями об'єкта, переданого як параметр. Результат виводиться на консоль.

// variant 1
const createObj = (product) => {
    return {
        ...product,
        id: new Date(),
    };
};
// variant 2

const createObj1 = (product) => ({
    ...product,
    id: new Date(),
});

// console.log(createObj({ name: "🍎", price: 30, quantity: 3 }));
// console.log(createObj1({ name: "🍎", price: 30, quantity: 3 }));

// РІЗНИЦЯ МІЖ ЗВИЧАЙНОЮ ФКНКЦІЄЮ І СТРІЛКОВОЮ
// - Стрілкова ф-ція немає псевдомасиву arguments
// - Стрілкова ф - ція немає прототипу
// - Стрілкова ф - ція має синтаксив неявного повернення
// - Стрілкова ф - ція бере контектс в момент створення

// - Звичайна ф-ція має прототип
// - Звичайна ф-ція має псевдомасиву arguments
// - У звичайній ф-ції контекст присвоюється в момент виклику

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
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
        console.log(this.balance)
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


const handleSuccess = message => console.log(message);
const handleError = message => console.log(message);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);