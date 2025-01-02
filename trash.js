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