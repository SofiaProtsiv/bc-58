

// // const father = {
// //     name: "Petro",
// //     lastName: "Protsiv",
// //     country: "Ukraine"
// // }

// // const son = Object.create(father)

// // son.name = "Ivan"
// // console.log(son)
// // console.log(son.lastName)

// obj.email = "s@gmail.com"
// obj["password"] = "1111"



const user = {
    name: "Sofia",
    phone: 763904691,
    hobby: "dance",
    lastName: "Protsiv",
    notes: ["work"]
}

for (const key in user) {
    console.log(user[key])
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

for (const [key, value] of Object.entries(user)) {
    console.log(key)
}


const obj = {
    email: "prostiv@gmail.com",
    getEmail() {
        console.log(this.email)
    }
}
const obj2 = {
    email: "sofia@gmail.com"
}

const resily = obj.getEmail.bind(obj2)
console.log(resily())