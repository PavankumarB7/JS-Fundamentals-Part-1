/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
console.log(jonas_matilda);

let _function = 27;
let $function = 27;
console.log(_function);

let myFirstJob = "Payroll";
let myCurretJob = "Web Developer";

console.log(myCurretJob);
*/

/*
false;
console.log(false);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "John");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

// null is undefined but it shows an object i.e. Error
console.log(typeof null);


//reassign or mutate
/*let age = 24;
age = 25;
console.log(age);*/

//const (cannot be mutated)
//const birthYear = 1996;
//birthYear = 1995;
//(variables created with const are immutable also means that we cannot declare empty const variables.)

// Math Operators
/*const now = 2037;
const agePavan = now - 1996;
const ageMelissa = now - 2018;
console.log(agePavan, ageMelissa);

console.log(agePavan * 2, agePavan / 10, 5 ** 4);
// 5 ** 4 means 5 to the power of 4 = 5*5*5*5

const firstName = "Pavan";
const lastName = "Kumar";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x /= 4; // x = x / 4
console.log(x);

// Comparison Operators
console.log(agePavan > ageMelissa); // >, <, >=, <=
console.log(ageMelissa >= 18);

const isFullAge = ageMelissa >= 18;

console.log(now - 1996 > now - 2018);*/

/*const now = 2037;
const agePavan = now - 1991;
const ageMelissa = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (agePavan + ageMelissa) / 2;
console.log(agePavan, ageMelissa, averageAge);*/

/*const firstName = "Pavan";
const job = "developer";
const birthYear = 1996;
const year = 2038;

const pavan =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(pavan);

const pavanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(pavanNew);

console.log(`String with 
multiple
lines`);*/

// Taking Decisions {IF / Else Statements}
/*const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years ;)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/

// Type Conversion
/*const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number(inputYear) + "18");

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof true);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);*/

// Falsy values; 0, '', undefined, null, NaN.
/*const money = 10;
if (money) {
  console.log("Don't Spend it All");
} else {
  console.log("You Should get a Job");
}

let height;
if (height) {
  console.log("YAY! Height is defned");
} else {
  console.log("Height is Undefined");
}

Equality Operators
const age = "18";
if (age === 18) console.log("You just became an Adult (strict)");

if (age == 18) console.log("You just became an Adult (loose)");

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 38) {
  // '38' == 38
  console.log("Cool!");
}

if (favourite === 38) {
  // 36 === 38 -> FALSE
  console.log("Cool! 38 is a number");
} else if (favourite === 28) {
  console.log("28 is a number");
} else if (favourite === 12) {
  console.log("12 is also a number");
} else {
  console.log("Number is not 38 or 28 or 12");
}

if (favourite !== 38) console.log("Why not 38?");*/

// Logical Operators
/*const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}*/

// Switch Statement
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare Theory Videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write Code Examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the Weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare Theory Videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write Code Examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the Weekend");
} else {
  console.log("Not a valid day");
}

// Ternary Operator
const age = 23;
/*age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");*/

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
