import inquirer from 'inquirer';
import { appendFile, writeFile, readFile } from 'fs';
// import generateHtml from './dist/generateHtml.js';
import Employee from './lib/employee.js';
import Manager from './lib/manager.js';
import managerHtml from './dist/managerHtml.js';
import engineerHtml from './dist/engineerhtml.js';
import internHtml from './dist/internHtml.js';



const createEngineer = () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineers name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineers id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineers email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineers github',
        },
    ]).then((data)=>{
        appendFile("./dist/index.txt", engineerHtml(data), (err)=>{
            if (err) throw err
        })
    }).then(()=>askAgain())
}

const createIntern = () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter interns name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter interns id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter interns email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter interns school',
        },
    ]).then((data)=>{
        appendFile("./dist/index.txt", internHtml(data), (err)=>{
            if (err) throw err
        })
    }).then(()=>askAgain())
}

const askAgain =()=>{
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'question',
            message: 'Do you want to continue'
        }
    ]).then((data)=>{
        if (!data.question){
            console.log("GoodBye")
        }else{
            menu()
        }
    })
}


const menu = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Choose your employees',
            choices:['Engineer', 'Intern']
        }
    ]).then((data)=>{
        switch(data.roles){
            case 'Engineer':
                createEngineer()
                break;
            case 'Intern':
                createIntern()
                console.log("To be continued")
                break;
            default:
                console.log("GoodBye")

        }
    })
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