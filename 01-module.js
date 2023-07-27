const a = 5 // NO hoisting, block, can NOT create without value
let b = 7 // NO hoisting, block, can create without value
var i = 9 // hoisting, global/func, can create without value

let c = 10;
let d = c

c = 20

// console.log(c, d) // 20, 10


// console.log(Object) // Array, Function
// console.log(typeof function fn() { })
// console.log(typeof []) // object
// console.log(typeof {}) // object
// console.log(typeof null) // object
// console.log(typeof NaN) // number
// console.log(typeof 3 / 0) //number

// 3 / 0 ===> Infinity
// "3" / "a" ===> NaN

// console.log(String.prototype)

// NULL VS UNDEFINED

// 1
// let r; // undefined

// 2
// function r() {
//     console.log("hello")
// }
// const result = r()
// console.log(result) // undefined

// 3
const obj = {
    a: 3
}
// console.log(obj.b) // undefined



// const isAgree = confirm("Agree wiuth terms?")
// const username = prompt("Enter your name")
// const age = prompt("Enter your age")


// console.log(Number(age))
// console.log(+age)
// console.log(Number.parseInt(age))
// console.log(Number.parseFloat(age))



// console.log("sofia".toLowerCase())
// console.log("sofia".charAt(0)) // console.log("sofia"[0])
// console.log("sofis".charCodeAt(0))
// console.log("index.js".endsWith(".js"))
// console.log("index.js".startsWith("index"))
// console.log("sofia".includes("r"))
// console.log("sofia".indexOf("s"))
// console.log("sofia".length)
// console.log("sofia".charAt("sofia".length - 1)) // console.log("sofia"["sofia".length - 1])
// console.log("1".padStart(2, "0"))
// console.log("1.3".padEnd(5, "0"))


// console.log("sofia".replace("s", "S"))
// console.log("sofsssssia".replaceAll("s", "S"))

// console.log(String(6)) // "6"
// console.log([1, 3, 4].toString())

// console.log("     sofss sssia    ".trim())


// console.log(Math.ceil(4.1)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.round(4.5))

// console.log(Number.parseFloat(8.8798174.toFixed(2))) //8.88


// &&  // зупиняється на першій брехні

// console.log("kiwi" && 5)
// console.log("kiwi" && 5 && null)

// // || зупиняється на першій правді

// console.log("kiwi" || 5)
// console.log(null || "") //

// // !

// console.log(!true) //false
// console.log(!false) //true

// "", 0, null, undefined, false ==> FALSE

// if (![].length) return



// if (1 > 0) {
//     const a = 8;
//     console.log(a)
// }

// const operator = "November"
// switch (operator) {
//     case "1":
//     case "2":
//     case "3": 
//         console.log("spring")
//         break
//     case "+":
//         console.log(2 + 2)
//         break;
//     default:
//         console.log("enter correct symbol")

// }

const vowels = "aoueiy"
const str = "sofia"
for (let i = 0; i < str.length; i++) {
    // console.log(str[i])

    if (vowels.includes(str.toLowerCase().charAt(i))) continue
    console.log(str.charAt(i))
}


const arr = [1, 4, -10, 9, 9]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log("In array is MINUS value")
        break
    }
}
