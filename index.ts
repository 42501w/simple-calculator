#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },

  { message: "Enter Second Number", type: "number", name: "secondNumber" },

  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "opeartor",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statment
if (answer.opeartor === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.opeartor === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.opeartor === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.opeartor === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid opeartor");
}
console.log(answer);
