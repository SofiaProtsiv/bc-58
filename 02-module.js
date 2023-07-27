// const arr = [1, 2, 3]

// console.log(arr[0]) // 1
// console.log(arr[arr.length - 1]) // 3

// console.log(typeof []) // object

// const arr1 = arr
// arr1[0] = 100

// console.log(arr === arr1) //true
// console.log(arr == arr1) //true
// console.log(arr)
// console.log(arr1)

// const newArr = [1, 2, 3, [6, 7]]
// const newArr1 = structuredClone(newArr)
// // newArr.slice()
// // [].concat(newArr)
// // Array.from(newArr)
// // [...newArr]

// console.log(newArr1 === newArr) //false
// console.log(newArr1 == newArr) //false

// // newArr1[3] = 100 // dont
// console.log(newArr1[3].push(10))

// console.log(newArr)
// console.log(newArr1)

const arr = [1, 2, 3];
// МУТУЮЧІ - ЗМІНЮЮЬТЬ ОРИГІНАЛ
// arr.push(4)
// arr.unshift(10, 0)
// arr.shift()
// arr.pop()
// arr.splice(0, 1)
// arr.splice(0, 1, "hello")
// arr.sort()

// НЕМУТУЮЧІ
arr.slice(0, 1);
const result = arr.concat([3, 5]);
// console.log(arr)
// console.log(result)
// console.log([...new Set(result)]) // ДОПОМОЖЕ ВИДАЛИТИ ДУБЛІКАТИ

// const NOdublicates = [];
// const dublicates = [];

// for (const item of result) {
//     !NOdublicates.includes(item)
//         ? NOdublicates.push(item)
//         : dublicates.push(item);
// }

// console.log(dublicates); // КОЛИ ТРЕБА ЗНАЙТИ ЯКЕ ЧИСЛО ДУБЛЮЄТЬСЯ

// const str = "потоп".toLowerCase()
// if (str === str.split(" ").reverse().join(" ")) {
//     console.log("Good")
// } else {
//     console.log("BAD")
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function paginate({ numbers, perPage, curretPage }) {
//     const totalPages = Math.ceil(numbers.length / perPage)
//     console.log("totalPages", totalPages)
//     return ([...numbers].splice(perPage * (curretPage - 1), perPage))
// }

// const group = paginate({
//     numbers,
//     perPage: 3,
//     curretPage: 1
// })

// const group1 = paginate({
//     numbers,
//     perPage: 3,
//     curretPage: 2
// })

// const group2 = paginate({
//     numbers,
//     perPage: 3,
//     curretPage: 3
// })
// console.log(group)
// console.log(group1)
// console.log(group2)

// const fn = function () { };
// fn();

// func();

// function func(...numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += Number(number);
//     }
//     return sum;
// }

// console.log(func("1", "3", 9, 5, 7, 8))

// function displayName({ username, ...info }) {
//     return ({
//         ...info,
//         username: "sofia"
//     })
// }
// console.log(
//     displayName({
//         username: "soifa",
//         hobby: "dance",
//         phone: 248237468
//     }))

// function valideData({ email, password }) {
//     if (!email || !password) {
//         console.log("enter data")
//         return
//     }

//     console.log(email)
//     console.log(password)
// }
// valideData({
//     email: "@slkfnls",
//     password: "wkejfhjk"
// });


// console.log("1")
// console.log("2")

// function y() {
//     console.log("3")
//     w()
// }

// function w() {
//     console.log(9)
// }
// console.log("4")
// y() 
// console.log(5)