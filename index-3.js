"use strict";

const logFunction = function ({
  age,
  gender,
  email,
  phone,
  ...fullname
}) {
  // const {
  // firstName,
  // lastName,
  // age,
  // gender,
  // email,
  // phone
  // } = user

  console.log(fullname)
};

// logFunction(
//   "Amelia",
//   "Burgess",
//   30,
//   "female",
//   "apjez@eh.aq",
//   "(096) 35-21-476"
// );

logFunction({
  firstName: "Amelia",
  lastName: "Burgess",
  age: 30,
  gender: "female",
  email: "apjez@eh.aq",
  phone: "(096) 35-21-476",
});
