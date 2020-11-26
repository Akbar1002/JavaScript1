"use strict";

function validateCardNumber(number) {
  let validationResult = true;
  // Input must be 16 characters
  if (number.length !== 16) {
    console.log("less then 16 characters");
    return;
  }
  // All characters must be numbers
  if (parseInt(number) != number) {
    console.log("invalid characters");
    return;
  }
  // At least two different numbers should be represented
  const numberSet = new Set(number);
  if (numberSet.size === 1) {
    console.log("only one type of number");
    return;
  }
  // The last number must be even
  if (number[number.length - 1] % 2 !== 0) {
    console.log("odd final number");
    return;
  }

  // this function doesnot work!.
  // The sum of all the numbers must be greater than 16
  //   let sum = 0;
  //   for (i = 0; i <= number.length - 1; i++) {
  //     sum += +number[i];
  //   }
  //   if (sum < 16) {
  //     console.log("sum less than 16");
  //     return;
  //   }
  //   console.log(`${validationResult} is a valid credit card number`);
}

validateCardNumber("a92332119c011112");
validateCardNumber("4444444444444444");
validateCardNumber("6666666666661666");
validateCardNumber("6666666666666661");
