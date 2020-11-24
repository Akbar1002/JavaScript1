"use strict";

function creditCardNumber(num) {}

function numberLength(creditCardNumber) {
  return creditCardNumber.length === 16 ? true : false;
}

function isnumber(creditCardNumber){
    return isNaN(creditCardNumber) ? false : true;
}

function differentDigits(creditCardNumber){
    const arrOfCardNumber = creditCardNumber.split('');
    const setOfCardNumber = new Set(arrOfCardNumber);
    return(setOfCardNumber.size) > 1 ? true : false
}

function validateCreditCardNumber(creditCardNumber) {
  if (numberLength(creditCardNumber)) {
    return "This is not a valid credit card length";
//   }
}
//     } else if (!isnumber(creditCardNumber)){
        return 'invalid, The input should only numbers';
    } else if (!differentDigits(creditCardNumber)){
        return ' Invalid ! The imput contain at least 2 different numbers';
    }
}

console.log(numberLength(11111122222233));
