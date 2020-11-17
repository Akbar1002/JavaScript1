'use strict'

// nummber zero is not even nummber//
for (let i=0; i<=20; i++){
console.log(i)
if(i===0){
    continue
}
else if (i%2 ){
    console.log('The number '+ i +' is odd')
}
else{
    console.log(`The number ${i} is even`)
}}