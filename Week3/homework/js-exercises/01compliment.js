"use strict";

function giveCompliment(name) {
  const compliments = [
    "amazing",
    "awesome",
    "brilliant",
    "excellent",
    "fabulous",
    "gorgeous",
    "great",
    "impressive",
    "outstanding",
    "superb",
  ];
  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  console.log(`YOU ARE ${compliment} ${name}`);
}

giveCompliment("Noer");
