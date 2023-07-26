"use strict";

/*
? Напишіть функцію під назвою displayName(), яка приймає об’єкт як аргумент і виводить ім’я та прізвище людини. 
? Використовуйте деструктуризацію об’єкта в аргументі функції. 
? А також використовуйте шаблонні рядки при друку імені та прізвища.
*/

function displayName({ first, last }) {
  return `${first} ${last}`;
}

// console.log(
//   displayName({
//     first: "Elon",
//     last: "Musk",
//     twitter: "@elonmusk",
//     company: "Space X",
//   })
// );

/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName. Викоритовуй rest оператор.
*/
function transformUsername({ firstName, lastName, ...userInfo }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...userInfo,
  };
}

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
//); // { id: 1, fullname: 'Jacob Mercer', email: 'j.mercer@mail.com'}

/*
? Напишіть функцію without(), яка повертає новий об'єкт без зазначених значень.
*/

function without(obj, ...props) {
  const updatedObj = { ...obj };

  for (const key of props) {
    delete updatedObj[key];
  }

  return updatedObj;
}

// console.log(without({ a: 1, b: 2 }, "b")); // Очікуваний результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
// console.log(without({ a: 1, b: 2, c: 3, d: 4 }, "c", "b")); // Очікуваний результат: ({ a: 1, b: 2, с: 3, d: 4 }, 'c, b') => { a: 1, d: 4 }

/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

const generateId = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const createContact = function (contact) {
  return {
    id: generateId(),
    createAt: new Date(),
    list: "default",
    ...contact,
  };
};

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
?  Створіть Todo List, додайте метед  updateTodo
*/

const todos = [
  {
    title: "подивитися лекцію",
    id: 1,
  },
  {
    title: "почитати конспект",
    id: 2,
  },
  {
    title: "пограти гру",
    id: 3,
  },
];


function updateTodo(id, newTodo) {
  let todo = {}
  let indexTodoToUpdate = 0

  // VARIANT 1
  // for (const todo of todos) {
  // if (todo.id === id) {

  //   indexTodoToUpdate = todos.indexOf(todo)

  //   todo = {
  //     ...todo,
  //     ...newTodo,
  //   }
  // }
  // }

  // VARIANT 2
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {

      todo = {
        ...todos[i],
        ...newTodo,
      }

      todos.splice(i, 1, todo)
    }
  }

  return todos
}

// console.log(updateTodo(3, { title: "зробити дз", favorite: true }))


/*
? Напишіть функцію, яка називається calculateSalesTotals(), яка повертає масив із двома новими ключами (sale і total). 
- Ключ «sale» дорівнює розрахованій ціні продажу на основі початкової ціни та знижки. 
- Ключ «total» дорівнює обчисленій сумі на основі запасів(stock), початкової ціни та знижки. 
? Ви повинні використовувати деструктуризацію об’єктів для об’єктів у масиві продажів і значення за замовчуванням об’єктів для ключа знижки. Стандартним значенням буде 0.0.
*/

const products = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

function calculateSalesTotals(products) {
  const updatedProducts = structuredClone(products);

  for (const product of updatedProducts) {
    if (!product.discount) {
      product.discount = 0.0
    }

    const totalPrice = (product.stock * (product.original - product.original * product.discount)).toFixed(2)

    product.total = Number(totalPrice)
  }

  return updatedProducts;
}

console.log(calculateSalesTotals(products))