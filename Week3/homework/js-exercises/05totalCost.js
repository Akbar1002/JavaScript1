"use strict";

const cartForParty = {
  cola: 1.2,
  chips: 0.9,
  popcorn: 1.5,
  redbull: 2,
  beer: 1.2,
};
// what is the better solution for this ?//

function calculateTotalPrice(num) {
  const total =
    cartForParty["cola"] +
    cartForParty["chips"] +
    cartForParty["popcorn"] +
    cartForParty["redbull"] +
    cartForParty["beer"];
  console.log(`Total: Euro ${total}`);
}

calculateTotalPrice(cartForParty);
