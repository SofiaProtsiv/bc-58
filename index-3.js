/*
 * for...in, Object.keys, Object.values
 */
const animal = {
    legs: 4
}
const dog = Object.create(animal)
dog.name = "jack";
console.log(dog)
for (const key in dog) {
    if (dog.hasOwnProperty(key)) {
        // console.log(dog.key) // BAD VARIANT IN LOOP
        console.log(dog[key])
    }
}

/*
? Отримайте суму зарплат усіх працівників
*/

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

//TODO: Через for...in
let sum = 0;

for (const key in salaries) {
    sum += salaries[key]
}

// console.log(sum)


//TODO: Через Object.keys();

for (const key of Object.keys(salaries)) {
    sum += salaries[key]
}

// console.log(sum)

//TODO: Через Object.values();
for (const salary of Object.values(salaries)) {
    sum += salary
}

// console.log(sum)

//TODO: Через Object.entries();


for (const entry of Object.entries(salaries)) {
    sum += entry[1]
}

console.log(sum)