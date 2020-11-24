"use strict";

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item) {
  const newItem = shoppingCart.push(item);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
    console.log(`You bought ${newItem}`);
  }
}

addToShoppingCart();
