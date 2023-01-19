/// /////////////////////////////////
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

// Store user details
const firstUser = 'Mark'
const secondUser = 'John'

// Test data one
const markMass1 = 78
const markHeight1 = 1.69

const johnMass1 = 92
const johnHeight1 = 1.95

// Calculate BMI
const markBMI1 = markMass1 / markHeight1 ** 2
console.log(markBMI1)
const johnBMI1 = johnMass1 / johnHeight1 ** 2
console.log(johnBMI1)

// Check if Mark has higher BMI
const markHigherBMI1 = markBMI1 > johnBMI1
console.log(markHigherBMI1)

// Test data two
const markMass2 = 95
const markHeight2 = 1.88

const johnMass2 = 85
const johnHeight2 = 1.66

// Calculate BMI
const markBMI2 = markMass2 / markHeight2 ** 2
console.log(markBMI2)
const johnBMI2 = johnMass2 / johnHeight2 ** 2
console.log(johnBMI2)

// Check if Mark has higher BMI
const markHigherBMI2 = markBMI2 > johnBMI2
console.log(markHigherBMI2)
