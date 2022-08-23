////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


//Store user details
let firstUser = 'Mark';
let secondUser = 'John';

// Test data one
let markMass1 = 78;
let markHeight1 = 1.69;

let johnMass1 = 92;
let johnHeight1 = 1.95;


// Calculate BMI
const markBMI1 = markMass1 / markHeight1 ** 2;
console.log(markBMI1);
const johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log(johnBMI1);

//Check if Mark has higher BMI
const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);


// Test data two
let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.66;


// Calculate BMI
const markBMI2 = markMass2 / markHeight2 ** 2;
console.log(markBMI2);
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(johnBMI2);


// Using template literals and if-else statement
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
} else {
    console.log(`Mark's BMI (${markBMI2}) is lower than John's (${johnBMI2})`);
}