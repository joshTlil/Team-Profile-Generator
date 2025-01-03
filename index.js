import inquirer from 'inquirer';
import { writeFile } from 'fs';
import generateHtml from './dist/generateHtml.js';
import Employee from './lib/employee.js';
import Manager from './lib/manager.js';
// writeFile("./dist/index.html", generateHtml(worker), (err)=>{
//     if (err) throw err;
//     console.log("The file has been created")
// })
//In order to add to array create the array outside the function 
//So when the function is called it does not reset
//And the new employees in the array are only created for that session

const worker = [
    // new Employee("Joshua", 2323, "jttasas"),
    // new Employee("John", 4545, "jidfjdf")
]

 const addArray = async () =>{
    // let number = 1
    await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter id",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email",
    },
    ]).then((data)=>{
        return worker.push(new Employee(data.name, data.id, data.email))
    }).then(async()=>{
        await askAgain()
    })
    
}

const askRole = async () =>{
    return await inquirer.prompt([
        {type: 'input',
         name: 'role',
         message: 'Enter role'
        }
    ])
}


//In order to use await keyword the function itself must be async
const askAgain = async() =>{
    await inquirer.prompt([
        {
            type: 'confirm',
            name: 'again',
            message: "Create again?",
        },
    ]).then(async(data)=>{
        if(data.again){
            await addArray()
        }
    })
}

const start= async() =>{
   await addArray()
// worker.push(new Employee("Action", 2323, "jfdfjdf"))
 worker.forEach(async(item) =>{
        console.log(item);
        let userRole = await askRole()
        console.log(userRole.role)
        if(userRole.role === "Manager"){
            const manager = new Manager(1234)
            manager.getInfo(item.name, item.id, item.email)
            // console.log(manager)
            // console.log("Does this work?" + item)
        }
        
    })
}

// console.log("New updated array" + worker)


//TODO: 
//Create the html page then use the DOM to target elements and add them
//as the person keeps making employees
//Make the limit 2 at the start 

//Create html page when creating the manager, then add employees
start()