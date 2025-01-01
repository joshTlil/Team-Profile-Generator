import inquirer from 'inquirer';
import { writeFile } from 'fs';
import generateHtml from './dist/generateHtml.js';
import Employee from './lib/employee.js';

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        message: 'What your id',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
]).then(data=>{
    const worker = new Employee(data.name, data.id, data.email)
    writeFile("./dist/index.html", generateHtml(worker), (err)=>{
        if (err) throw err;
        console.log("The file has been created")
    })
})