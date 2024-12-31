import inquirer from 'inquirer';
import { writeFile } from 'fs';
import generateHtml from './dist/generateHtml.js';

const promptEmployee = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your id"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email"
        },
        {
            type: 'confirm',
            name: 'loop',
            message: 'Add another employee?'
        }
    ])
}

const promptLoop = (data) =>{
if(data.loop === true){
promptEmployee()
}
console.log(data)
}

const init = () =>{
    promptEmployee()
    .then((data)=>{
    promptLoop(data)
    writeFile("./dist/index.html", generateHtml(data), (err)=>{
        if (err) throw err;
        console.log("The file has been created")
    })
    })
}

init()