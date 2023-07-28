/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// перебираючий метод масиву
// його не можливо зупинити, перебиріє докінця
// він нічого не повертає
// має доступ до інтексів елкментів
// поребирає кожен елемент, без можливсті збільшувати крок/інтервал

// const numbers = [1, 2, 3, 4, 5];

// forEach під капотом
const ownForEach = function (arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], index);
    }
};

const numbers = [1, 2, 3, 4, 5];

// ownForEach(numbers, (number, index) => console.log(number, index))

// console.log(numbers)
numbers.forEach((number, index, arr) => {
    if (index === 3) {
        arr.splice(index, 1, "hello");
        return
    }
});

// console.log(numbers)

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

function logItems(items) {
    // for (let i = 0; i < items.length; i += 1) {
    //     console.log(`${i + 1} - ${items[i]}`);
    // }

    items.forEach((name, index) => console.log(`${index + 1} - ${name}`));
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

function printContactsInfo({ names, phones } = {}) {
    const nameList = names.split(",");
    const phoneList = phones.split(",");

    // for (let i = 0; i < phoneList.length; i += 1) {
    //     console.log(i);
    //     console.log(`${nameList[i]}: ${phoneList[i]}`);
    // }

    nameList.forEach((name, index) =>
        console.log(`${name}: ${phoneList[index]}`)
    );
}

printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
});

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

function calсulateAverage(...args) {
    let total = 0;

    // for (let i = 0; i < args.length; i++) {
    //   total += args[i];
    // }

    args.forEach((value) => (total += value));

    return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функцію groupBy(), яка групує елементи з масиву за значенням, що повертається зворотним викликом, коли елемент із масиву передається як аргумент.
*/
const users = [
    {
        name: "John",
        yearOfBirth: 1988,
        placeOfBirth: "New York",
    },
    {
        name: "Nancy",
        yearOfBirth: 1963,
        placeOfBirth: "New York",
    },
    {
        name: "John",
        yearOfBirth: 1980,
        placeOfBirth: "Toronto",
    },
];

function groupBy(users, callback) {
    const newObj = {};

    users.forEach((user) => {
        const placeOfBirth = callback(user);

        if (newObj[placeOfBirth]) {
            newObj[placeOfBirth].push(user);
        } else {
            newObj[placeOfBirth] = [user];
        }
    });

    return newObj;
}

// console.log(groupBy(users, (objectEl) => objectEl.placeOfBirth));

const num = [1, 3, 3, 3, 4, 1, 5, 5];

const obj = {};

num.forEach((el) => {
    !obj[el] ? (obj[el] = 1) : (obj[el] += 1);
});

console.log(obj);

//Очікуваний резульат:
// {
//   ❗️New York: [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     }
//   ],
//   ❗️Toronto: [
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     }
//   ]
// }
