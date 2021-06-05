/*
let js = 'hello';
console.log(js);

// BREAK

let firstName = 'Harry'


*/
//  FUNDAMENTALS
let continent = 'North America'
let country = 'USA'
let population = 300000000

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = (country === 'USA');
// let language;

// console.log(isIsland);
// console.log(population);
// console.log(typeof language);

// const language = 'Parseltongue';

// language = 'English';

// console.log(language);

// console.log(population / 2);
// console.log(population ++);

// let popFinland = 6000000;
// console.log(population > popFinland);
// let avgPopulation = 33000000;
// console.log(population > avgPopulation);
// let description = country + ' is in ' + continent;

// console.log(description, country, continent);


// let is mutable
// const is immutable 

// const birthYear = 1994;
// let age = 27;

// const job; is not okay => missing initializer




// ##########################################################
// CODING CHALLENGE 1

// BMI = mass / height ** 2 = mass / (height * height)

// const markWeight = 78;
// const markHeight = 1.69;
// const markBMI = markWeight / (markHeight ** 2);

// const johnWeight = 92;
// const johnHeight = 1.95;
// const johnBMI = johnWeight / (johnHeight ** 2);


// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);


// ##########################################################
// STRING / TEMPLATE LITERALS


// const firstName = 'Sheilz';
// const hello = `I'm ${firstName}`;

// const year = 1994;
// const age = `${2021 - year}`;

// console.log(age);

// ##########################################################
// IF / ELSE

// const age = 17; 
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Yassss');
// } else {
//     console.log('So sad');
// }

// const birthYear = 1994;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// ##########################################################
// CHALLENGE 2

// const markWeight = 78;
// const markHeight = 1.69;
// const markBMI = markWeight / (markHeight ** 2);

// const johnWeight = 92;
// const johnHeight = 1.95;
// const johnBMI = johnWeight / (johnHeight ** 2);


// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than John's (${markBMI})`);
// }

// ##########################################################
// TYPE CONVERSION & COERCION

const num = '1994';

console.log(Number(num), num);