"use strict";

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item) {
  shoppingCart.push(item);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  console.log(`You bought ${shoppingCart}`);
}

addToShoppingCart("water");
addToShoppingCart("apple");
addToShoppingCart("eggs");
