#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; //Dollar
let mypinCode = 2525;  
console.log(chalk.green("\n \tWelcome to Alvera's ATM Machine\t\n"))

let pinAnswer= await inquirer.prompt (
    //object
    {
        name:"pin", 
        type:"number", 
        message:chalk.blue("Enter your pin code:"),
    }
);

if (pinAnswer.pin === mypinCode){
    console.log(chalk.red("\nYour pincode is correct!!!\n"));
    let operationAns = await inquirer.prompt([
        {
        name:"operations",
        message:"Please select option.",
        type:"list",
        choices:["Withdraw Amount", "Fast Cash","Check Balance"],
    }]);
    if (operationAns.operations==="Withdraw Amount")
        {
            let withdrawAns=await inquirer.prompt([{
            name:"amount",
            type:"number",    
            message:"Enter your Amount:",
            }]);

if (withdrawAns.amount <= myBalance)
         {
     let balance = myBalance - withdrawAns.amount;
    console.log(chalk.blue(`Your Remaining Balance is:${balance}`));
    }
    else {
     console.log(chalk.red(`insuficient Balance`));
     }
}
     else if(operationAns.operations ==="Fast Cash")
        {
     let fastCashAns = await inquirer.prompt([
     {
      name:"fastCash",
      type:"list",
     choices:[1000,2000,5000,10000],            
}]);

if (fastCashAns.fastCash <= myBalance){
    let balance2 = myBalance-fastCashAns.fastCash;
    console.log(`Your Remaining Balance is:${balance2}`);
}
else {
    console.log("insuficient Balance");
    }
}
else if (operationAns.operations === "Check Balance"){
    console.log(chalk.green(myBalance));
}
}
else{
        console.log(chalk.yellow("Your pin is wrong"));
    }