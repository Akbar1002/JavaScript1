"use strict";

const cartForParty = {
  cola: 1.2,
  chips: 0.9,
  popcorn: 1.5,
  redbull: 2,
  beer: 1.2,
};

function calculateTotalPrice(items) {
  // exception check
  let price = 0;
  if (cartForParty.length === 0) {
    console.log(price);
    return;
  }
  // regular
  for (let item in items) {
    price += items[item];
  }
  console.log(`TOtal: ${price}`);
}

calculateTotalPrice(cartForParty);
