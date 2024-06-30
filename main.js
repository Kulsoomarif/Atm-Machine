#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var myBalance = 10000; //Dollar
var mypinCode = 2525;
console.log(chalk_1.default.green("\n \tWelcome to Alvera's ATM Machine\t\n"));
var pinAnswer = await inquirer_1.default.prompt(
//object
{
    name: "pin",
    type: "number",
    message: chalk_1.default.blue("Enter your pin code:"),
});
if (pinAnswer.pin === mypinCode) {
    console.log(chalk_1.default.red("\nYour pincode is correct!!!\n"));
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operations",
            message: "Please select option.",
            type: "list",
            choices: ["Withdraw Amount", "Fast Cash", "Check Balance"],
        }
    ]);
    if (operationAns.operations === "Withdraw Amount") {
        var withdrawAns = await inquirer_1.default.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your Amount:",
            }]);
        if (withdrawAns.amount <= myBalance) {
            var balance = myBalance - withdrawAns.amount;
            console.log(chalk_1.default.blue("Your Remaining Balance is:".concat(balance)));
        }
        else {
            console.log(chalk_1.default.red("insuficient Balance"));
        }
    }
    else if (operationAns.operations === "Fast Cash") {
        var fastCashAns = await inquirer_1.default.prompt([
            {
                name: "fastCash",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            }
        ]);
        if (fastCashAns.fastCash <= myBalance) {
            var balance2 = myBalance - fastCashAns.fastCash;
            console.log("Your Remaining Balance is:".concat(balance2));
        }
        else {
            console.log("insuficient Balance");
        }
    }
    else if (operationAns.operations === "Check Balance") {
        console.log(chalk_1.default.green(myBalance));
    }
}
else {
    console.log(chalk_1.default.yellow("Your pin is wrong"));
}
