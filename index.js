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

const addArray = () =>{
    return worker.push(new Employee("Visual", 2323, "jfdfjdf"))
}

const start=() =>{
    addArray()
// worker.push(new Employee("Action", 2323, "jfdfjdf"))
worker.forEach(function(item){
    console.log(item)
})
}

// console.log("New updated array" + worker)


//TODO: 
//Create the html page then use the DOM to target elements and add them
//as the person keeps making employees
//Make the limit 2 at the start 

//Create html page when creating the manager, then add employees
start()