// let x = "flower";
// let y = "gun";

// let Laptop = {
//   model: "HP",
//   price: 2000,
//   color: "Black",
// }

// console.log(typeof "flower");
// console.log(typeof "Black");
// console.log(typeof 2000);

// if (typeof "flower" === typeof "gun") { console.log('SAME TYPE'); }
// else { console.log('Not the same'); }



// Exercise 8: Type checker

// Create a function that fulfills the following requirements:

// Takes in 2 arguments
// Check the data type of each
// Compares each data type
// Logs to the console the message SAME TYPE if they are the same type. If they are different types log Not the same....

const name = 'slim';
const number = 9;
 function checker (a,b) {

  if (typeof(a) == typeof(b) ) {
    console.log('same')
  } else {
    console.log('no')
  }
}

checker(name, number)



