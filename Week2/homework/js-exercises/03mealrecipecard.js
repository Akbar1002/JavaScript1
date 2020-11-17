'use strict'

let mealRecipe = {
  title: 'polo',
  servings: 3,
  ingredients: "meat, oil, carrot, onion, rice"

};

for(let i in mealRecipe){
  if(i=="title"){
    console.log(`Meal Name: ${mealRecipe[i]}`)
  } else{console.log(`${i}: ${mealRecipe[i]}`)}
  
}