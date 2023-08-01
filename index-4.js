/*
? Виправ помилки, які будуть в консолі, щоб скрипт запрацював.
*/
const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

/*
? Виправ помилки, які будуть в консолі, щоб скрипт запрацював.
*/
const car = {
  registrationNumber: "GA12345",
  brand: "Toyota",
};

const displayDetails = (ownerName) => {
  console.log(
    `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
  );
};

displayDetails("Sofia");

/*
?  Що виведеться в консоль?
*/
const directRoute = function (to = "Chop") {
  console.log(`${this.from} => ${to}`);
};

const train1 = {
  from: "Kyiv",
  directRoute,
};
const train2 = {
  from: "Lviv",
  directRoute,
};

directRoute.apply(train1, ["Vinnytsia"]);
directRoute.call(train1);
train2.directRoute();
train1.directRoute.call(train2, "Odessa");

const yourDirectRoute = directRoute.bind(train1);
yourDirectRoute();
yourDirectRoute("Kharkiv");

const theirDirectRoute = directRoute.bind(train2, "Poltava");
theirDirectRoute();
theirDirectRoute("Cherkasy");
theirDirectRoute.call(train1);

const anotherDirectRoute = train1.directRoute;
console.log(anotherDirectRoute());
