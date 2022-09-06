'use strict'
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// Mark Miller object
const person1 = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // Calculate BMI
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return Math.round(this.bmi);
    }
}

// John Smith object
const person2 = {
    fullname: 'John Smith',
    mass: 400,
    height: 1.95,

    // Calculate BMI
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return Math.round(this.bmi);
    }
}

console.log(person1.calcBMI(this.bmi) > person2.calcBMI(this.bmi) ? `${person1.fullname}'s BMI (${person1.calcBMI(this.bmi)}) is higher than ${person2.fullname}'s (${person2.calcBMI(this.bmi)})!` : `${person2.fullname}'s BMI (${person2.calcBMI(this.bmi)}) is higher than ${person1.fullname}'s (${person1.calcBMI(this.bmi)})!`);