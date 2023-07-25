/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 * Короткий запис властивостей
 */

// Підвиди складного типу даних
console.log(typeof function fn() { })
console.log(typeof [])
console.log(typeof {}) // лише об'єкт виділяється як складний тип даних


const animal = {
    legs: 4,
};
const dog = Object.create(animal)
dog.name = "jack"
// console.log(dog)
// console.log(dog.legs)
// console.log(dog.hasOwnProperty("legs"))


/*
* Практика базових дій над об'єктом
? Створи 2 окремі змінні firstName і lastName
? Створи об'єкт user і занеси в нього дані по firstName і lastName, після цієї дії в об'єкті user має бути 2 властивості.
? Додай нову властивість isAdmin, яка по дефолту буде false
? Зміни значення властивості isAdmin на true
? Виедети значення властивості lastName у консоль 2 способами.
? Створи змінну const login = "test@gmail.com"
? Створи змінну const password = "test123"
? Створи властивість auth, її значенням має бути об'єкт з 2 властивостями login i password. Скоритайся короткими властивостями
? Виедети значення властивості auth у консоль.
*/
const firstName = "Sofia"
const lastName = "Protsiv"
const isAdmin = "isAdmin";

const user = {
    firstName,
    lastName
}

user.isAdmin = false; // коли ви знаєте до якох властивості хочете звернутисяʼ

// коли працюєте з динамічними властивостями у циклах
// user["isAdmin-hello"] = false
// user[isAdmin] = true; 

console.log(user.lastName)
console.log(user["lastName"])

const login = "test@gmail.com"
const password = "test123"

user.auth = {
    login,
    password
}

console.log(user)
