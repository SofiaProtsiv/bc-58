'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//* Поверхнева копія масива
const arr1 = [1, 2, 3]
console.log(...arr1)
const copyArr1 = [...arr1] // поверхнева копія
const copyArr2 = [].concat(arr1) // поверхнева копія
const copyArr3 = Array.from(arr1) // поверхнева копія
const copyArr4 = arr1.slice() // поверхнева копія

//* Об'єднання масивів
const arr2 = [1, 2, 3]
const arr3 = [5, 2, 3]
console.log([...arr2, ...arr3]) // об'єднання
console.log(arr2.concat(arr3)) // об'єднання

//* Розпилення масиву у функцію
console.log(Math.max(...arr1))

//* Операція spread як заміна Object.assign({}, ...sources)

const obj1 = { a: 1 }
// const obj2 = Object.assign(obj1, { b: 2 }) // об'єднання
// const obj3 = { ...obj1, ...{ b: 2 } } // об'єднання

const copyObj1 = Object.assign({}, obj1) // поверхнева копія
const copyObj2 = { ...obj1 } // поверхнева копія

copyObj1.b = 9
// console.log(obj1)
// console.log(copyObj1)

//* Розпилення складних типів, глибока копія

/*
 * Операція rest
 */

const obj = { a: 1, b: 3, c: { d: 7 }, d: [] }
const arr = [3, "", null, false, {}, []]

const deepCopyArr = structuredClone(arr)
const deepCopyObj = structuredClone(obj) // глибока копія
const deepCopyLodash = _.cloneDeep(obj) // глибока копія
const deepCopyJson = JSON.parse(JSON.stringify(obj))  // глибока копія

deepCopyLodash.c.d = 700

// console.log(obj)
// console.log(deepCopyLodash)


const newArr = [1, 2, [3, 4, [5, 6]], 7]
console.log(newArr.flat(Infinity))


function fn(...numbers) {
    console.log(numbers)
}

function fn(a, ...numbers) {
    console.log(numbers)
}

fn(1, 2, 3)