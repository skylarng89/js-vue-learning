////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

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

//Check if Mark has higher BMI
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Print to console
console.log("Mark's BMI is higher than John's!");
console.log("John's BMI is higher than Mark's!");

// Using template literals and if-else statement
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
} else {
    console.log(`Mark's BMI (${markBMI2}) is lower than John's (${johnBMI2})`);
}