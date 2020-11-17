"use strict";

const drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++) {
  const index = Math.floor(i / 2);
  drinkTray.push(drinkTypes[index]);
}
console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");
