#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


async function wellcome() {
    let tittle = chalkAnimation.pulse(
      "Develp by Hassan Sheikh "
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    tittle.stop();
  }
  await wellcome();

//
let todo:string[]=[]
let loop=true
while(loop){
    var answer:{TODO:string,retry:boolean}=await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:chalk.yellow("What do you to add in your todo list? ")
        },
        {
            type:"confirm",
            name:"retry",
            message:chalk.blue("Do you want to add more TODO? "),
            default:false
        }
    ])
    var {TODO , retry}=answer
    loop=retry
    if(TODO){
        todo.push(chalk.green(TODO))
    }else{
        console.log(chalk.red("please add valid input"))
    }
}
if(todo.length> 0){
    console.log(chalk.gray("Your todo list :"))
    todo.forEach(todo=>{
console.log(chalk.green(todo))
    })
}else{
    console.log(chalk.red("the list is empty"))
}























