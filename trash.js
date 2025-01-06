// const just = () =>{
// const createEmployee = () =>{
//     let arr = []
//     inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//       },
//       {
//         type: 'input',
//         message: 'What your id',
//         name: 'id',
//       },
//       {
//         type: 'input',
//         message: 'What is your email?',
//         name: 'email',
//       },
//       {
//         type: 'confirm',
//         message: 'Again?',
//         name: 'loop',
//       }
// ]).then(data=>{
//     // arr.push(data)
//     if(arr.length !== 2 && data.loop){
//         arr.push(data)
//         console.log(arr)
//         createEmployee()
//     }else {
//         console.log(arr)
//         return "Done"
//     }
//     // const worker = new Employee(data.name, data.id, data.email)
//     // writeFile("./dist/index.html", generateHtml(worker), (err)=>{
//     //     if (err) throw err;
//     //     console.log("The file has been created")
//     // })
//     // return arr
// })
// }
// createEmployee()

// }

// just()

// const worker = [
//     new Employee("Joshua", 223, "jj@sddsse"),
//     new Employee("John", 4545, "rf@djdff")
// ]

// const start = (worker) =>{

// writeFile("./dist/index.html",generateHtml(worker), (err)=>{
//     if (err) throw err;
//     console.log("The file has been created")
// })
// }

// start(worker)
//Create two inquier prompts one that asks to create the employee
//Other one to ask the user again 

//TODO: 
//What I have learned so far is that I can't create an array with the current setup that I have now
//I need to figure out another away to store user input and data

//Maybe ask the user for which role they are filling send the info to that class page 
//Compute the information over there

// async function start(){
//     let arr = []
//     let count = await inquirer.prompt([{
//         type: 'input',
//         name: 'count',
//         message: "Enter count"
//     }])
//     console.log(count)
//     for(let i = 0; i < 2; i++){
//         let response = await inquirer.prompt([{
//             type: 'input',
//             name: 'name',
//             message: "What is your name"
//         }]);
//         arr.push(response.name)
//     }
//     // console.log(arr)
//     return arr
//     // writeFile("./dist/index.html", generateHtml(arr), (err)=>{
//     //     if (err) throw err;
//     //     console.log("The file has been created")
//     // })
// }

// const init = () =>{
//     let newArr = []
//     start()
//     .then((data)=>{
//         console.log("This "+data.length)
//         for(let i = 0; i < data.length; i++){
//            newArr.push(data[i])
//         }
//         console.log(newArr)
//     writeFile("./dist/index.html", generateHtml(newArr), (err)=>{
//         if (err) throw err;
//         console.log("The file has been created")
//     })
//     })
// }


// init()

// writeFile("./dist/index.html", generateHtml(worker), (err)=>{
//     if (err) throw err;
//     console.log("The file has been created")
// })
//In order to add to array create the array outside the function 
//So when the function is called it does not reset
//And the new employees in the array are only created for that session


//TODO:
//Maybe create a forEach function when creating template for employees

// const worker = [
//     // new Employee("Joshua", 2323, "jttasas"),
//     // new Employee("John", 4545, "jidfjdf")
// ]

// const myManager = [

// ]

// const writeToFile = async(name, id, email) =>{
//     // let data = myManager
//     writeFile("./dist/index.txt", template(name, id, email), (err)=>{
//         if (err) throw err;
//         // console.log("The file has been created")
//     })

// }

//  const addArray = async () =>{
//     // let number = 1
//     await inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: "Enter name",
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: "Enter id",
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "Enter email",
//     },
//     ]).then((data)=>{
//         return worker.push(new Employee(data.name, data.id, data.email))
//     }).then(async()=>{
//         await askAgain()
//     })
    
// }

// const askRole = async () =>{
//     return await inquirer.prompt([
//         {type: 'input',
//          name: 'role',
//          message: 'Enter role'
//         }
//     ])
// }

// const editHtml = async(data) =>{
//     //TODO:
//     //Maybe have a txt html file first,and when user is done creating a team then take
//     //all that data and then turn into an html file 
//     //Come back to this later
//     const modify = data.replace('<footer></footer>', `<h1>${data}</h1>`)
//     appendFile("./dist/index.txt", employeeGenerate(modify), (err)=>{
//         if (err) throw err
//         console.log("File has been updated")
//     })
//     await completeNow()
// }

// const completeNow = async() =>{
//     readFile('./dist/index.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         const modify = data.replace('<h1>Hello World!</h1>', data)
//     appendFile("./dist/index.html", modify, (err)=>{
//         if (err) throw err
//         console.log("Html updated")
//     })
// })
// }


// //In order to use await keyword the function itself must be async
// const askAgain = async() =>{
//     await inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'again',
//             message: "Create again?",
//         },
//     ]).then(async(data)=>{
//         if(data.again){
//             await addArray()
//         }
//     })
// }

// const menu = async() =>{
//    return await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'welcome',
//             message: "Choose one",
//             choices: ['Hello', 'GoodBye']
//         }
//     ]).then((data)=>{
//         editHtml(data.welcome)
//     })
// }

// const start= async() =>{
//    await addArray()
// // worker.push(new Employee("Action", 2323, "jfdfjdf"))

//    .then(()=>{        
//     worker.forEach(async(item) =>{
//     console.log(item);
//     let userRole = await askRole()
//     console.log(userRole.role)
//     if(userRole.role === "Manager"){
//         const manager = new Manager(1234)
//         manager.getInfo(item.name, item.id, item.email)
//         myManager.push(manager)
//         await writeToFile(item.name, item.id, item.email)
//         // console.log("Does this work?" + item)
//         await menu()
//     }
    
// })
// })

// }



// // console.log("New updated array" + worker)


// //TODO: 
// //Create the html page then use the DOM to target elements and add them
// //as the person keeps making employees
// //Make the limit 2 at the start 

// //Create html page when creating the manager, then add employees
// start()