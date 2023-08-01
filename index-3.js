"use strict";
/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, розраховує
? та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
*/

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const stone = this.stones.find((stone) => stone.name === stoneName);
    return stone.price * stone.quantity;
  },
};

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

/*
* Працюємо з колекцією товарів у кошику:
? getItems() - отримати корзину товарів, усі товари
? add(product) - додати у корзину об'єкт продукта
? remove(productName) - повністю видалити продукт під назвою productName
? clear() - повністю очистити корзину товарів
? countTotalPrice() - порахувати суму замовлення
? increaseQuantity(productName) - збільшити кількість продукта під назвою productName
? decreaseQuantity(productName) - зменшити кількість продукта під назвою productName
*/
const cart = {
  items: [],

  getItems() {
    return this.items;
  },
  add(product) {
    const productInCart = this.items.find((el) => el.name === product.name);

    productInCart
      ? (productInCart.quantity += 1)
      : this.items.push({ ...product, quantity: 1 });
  },
  remove(productName) {
    // Variant 1
    // const productToRemove = this.items.findIndex(
    //   (el) => el.name === productName
    // );
    // this.items.splice(productToRemove, 1);

    // Variant 2
    this.items = this.items.filter((el) => el.name !== productName);
  },
  clear() {
    this.items = [];
    // this.items.splice(0, items.length);
  },
  countTotalPrice() {
    return this.items.reduce((sum, el) => sum + el.quantity * el.price, 0);
  },
  increaseQuantity(productName) {
    const product = this.items.find((el) => el.name === productName);

    product.quantity += 1;
  },
  decreaseQuantity(productName) {
    const product = this.items.find((el) => el.name === productName);

    product.quantity -= 1;

    if (product.quantity <= 0) {
      this.remove(productName);
    }
  },
};

const apple = { name: "🍎", price: 50 };
const grape = { name: "🍇", price: 70 };
const lemon = { name: "🍋", price: 60 };
const strawberry = { name: "🍓", price: 110 };

// console.table(cart.getItems());

cart.add(apple);
cart.add(apple);
cart.add(lemon);

console.table(cart.getItems());

cart.remove("🍎");
console.table(cart.getItems());

cart.clear();
console.table(cart.getItems());

cart.add(apple);
cart.add(apple);
cart.add(grape);
cart.add(grape);
cart.add(grape);
cart.add(lemon);
cart.add(strawberry);
cart.add(strawberry);

cart.increaseQuantity("🍎");
cart.decreaseQuantity("🍎");

console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());
