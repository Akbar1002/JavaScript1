"use strict";

const numChildren = [2, 3, 4, 5, 6];
const partnerNames = ["Mayira", "Xadiya", "Pazilat", "Tumaris"];
const locations = ["Aksu", "Urumqi", "Beijing", "Milan", "Rotterdam"];
const jobs = ["architect", "web developer", "freelance", "shopper"];

function tellFortune(numChildren, partnerNames, locations, jobs) {
  const children = numChildren[Math.floor(Math.random() * numChildren.length)];
  const partner = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  console.log(
    `You will be a ${job} in ${location}, married to ${partner} with ${children} kids`
  );
}
tellFortune(numChildren, partnerNames, locations, jobs);
