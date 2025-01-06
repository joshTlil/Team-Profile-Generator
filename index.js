import inquirer from 'inquirer';
import { appendFile, writeFile, readFile } from 'fs';
// import generateHtml from './dist/generateHtml.js';
import Employee from './lib/employee.js';
import Manager from './lib/manager.js';
import managerHtml from './dist/managerHtml.js';







const menu = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Choose your employees',
            choices:['Engineer', 'Intern']
        }
    ])
}


const start = () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter managers name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter managers id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter managers email',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter managers office number',
        },
    ]).then((data)=>{
        writeFile("./dist/index.txt", managerHtml(data), (err)=>{
            if (err) throw err
            // console.log("File has been created")
        })
    }).then(()=>{
        menu()
    })
}


start()