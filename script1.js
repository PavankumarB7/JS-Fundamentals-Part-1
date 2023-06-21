/*
let country = "India";
let continent = "Asia";
let population = 2500000000000;

console.log(country);
console.log(continent);
console.log(population);
*/

//let isIsland = true;
//let language;

/*console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/

/*language = "telugu";
const country = "India";
const continent = "Asia";
const isIsland = true;
isIsland = false;*/

/*let population = 9;
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const country = "India";
const continent = "Asia";
const language = "Hindi";
console.log(population / 2);*/
/*const description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;

console.log(description);*/

/*const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);*/

// CODING CHALLENGE # 1
// Test Data 1
// Method 1
/*let mass1 = 78;
let mass2 = 92;
let height1 = 1.69;
let height2 = 1.95;

console.log(mass1 / height1 ** 2);
console.log(mass1 / height1 ** height1);

console.log(mass2 / height2 ** 2);
console.log(mass2 / height2 ** height2);*/

// or

// Method 2
/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/

// Test Data 2
/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/

// if / else
/*const country = "India";
let population = 10;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}*/

// CODING CHALLENGE # 2
// TASK 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's");
}

// TASK 2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);*/

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" > 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operator
/*const numNeighbours = Number(
  prompt("How many neighbour countries does your country have")
);
console.log(numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}*/

/*const country = "England";
const language = "english";
const population = 20;
const isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria`);
}*/

// Coding Challenge 3
/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}*/

// else if (scoreDolphins === scoreKoalas);

// Bonus 1
/*const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}*/
