'use strict';
/*
 * Деструктуризація об'єктів
*/

const user = {
    firstName: 'John',
    lastName: 'Reese',
    age: 30,
};

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName присвоє змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
*/

console.log(user.firstName, user.lastName, user.age)
const { age: userAge, lastName, firstName, isAdmin = false } = user

console.log(userAge, lastName, firstName, isAdmin)


/*
 * Глибока деструктуризація об'єктів
 */

const team = {
    number: 4,
    flag: undefined,
    // flag: './images/flag.jpg',
    employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
    langs: {
        original: 'uk',
        secondary: 'pl',
    },
};
const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';


// const { number, flag = defaultImg, employees } = team;
// const { secondary, original } = team.langs

const { number, flag = defaultImg, employees, langs: { secondary, original } } = team

console.log(secondary, original)
console.log(flag)




/*
 * Деструктуризація масивів
 */
const rgb = [0, 255, 34];
const [red, green, blue] = rgb
console.log(red, green, blue)

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

const salaries = {
    John: 100,
    Pete: 300,
    Mary: 2500,
};

// const t0 = performance.now()
function topSalary(salaries) {
    let theBestEmployee = ""
    let theLargestSalary = 0

    const groups = Object.entries(salaries)

    if (!groups.length) return null;

    for (const [name, salary] of groups) {
        // const [name, salary] = group

        if (theLargestSalary < salary) {
            theBestEmployee = name
            theLargestSalary = salary
        }
    }

    return `theBestEmployee is ${theBestEmployee} - ${theLargestSalary}`
}
console.log(topSalary(salaries))
// const t1 = performance.now()
// console.log(t1 - t0)

/// VARIANT 2
const t0 = performance.now()
function topSalary(salaries) {
    const maxSalary = Math.max(...Object.values(salaries))
    for (const salary of Object.entries(salaries)) {
        if (salary.includes(maxSalary)) {
            return `${salary[0]} has ${salary[1]}`
        }
    }
}
console.log(topSalary(salaries))
const t1 = performance.now()
console.log(t1 - t0)


