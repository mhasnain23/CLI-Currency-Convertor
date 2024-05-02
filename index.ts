#! /usr/bin/env node
import inquirer from "inquirer";
let currency: { [key: string]: number } = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);

let fromAmount: number = currency[user_answer.from];
let toAmount: number = currency[user_answer.to];
let amount: number = user_answer.amount; //USD Based currency
let baseAmount: number = amount / fromAmount;
let convertedAmount: number = baseAmount * toAmount;
console.log(convertedAmount);