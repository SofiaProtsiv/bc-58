"use strict";
/*
 * Грязні і чисті функції
 */

//! Dirty function
const numbers = [1, 2, 3, 4, 5];

const dirtyMultiply = (array, value) => {
  //   console.log(numbers === array);

  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

// console.log(numbers);
// dirtyMultiply(numbers, 5);
// console.log(numbers);

//? Clear function

const clearPushNumbers = (numbersArr, ...args) => {
  const copyNumbersArr = [...numbersArr];

  //   console.log(numbers === copyNumbersArr);

  copyNumbersArr.push(...args);

  return copyNumbersArr;
};

// console.log("numbers: ", numbers);
// const changedNumbers = clearPushNumbers(numbers, 9, 6, 8);
// console.log("copy of numbers: ", changedNumbers);
