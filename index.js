import inquirer from 'inquirer';
import { writeFile } from 'fs';
import generateHtml from './dist/generateHtml.js';
import Employee from './lib/employee.js';
// writeFile("./dist/index.html", generateHtml(worker), (err)=>{
//     if (err) throw err;
//     console.log("The file has been created")
// })

const worker = [
    new Employee("Joshua", 2323, "jttasas"),
    new Employee("John", 4545, "jidfjdf")
]

const start=() =>{
worker.push(new Employee("Action", 2323, "jfdfjdf"))
worker.forEach(function(item){
    console.log(item)
})
}

// console.log("New updated array" + worker)

start()