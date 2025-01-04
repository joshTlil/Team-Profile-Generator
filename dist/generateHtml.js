import employeeGenerate from "../employeeHtml.js";

const generateHtml = (name, id, email) =>
//     for(let i = 0; i < answers.length; i++){

    
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>Team Generator</title>
// </head>
// <body>
//     <h1>${answers[i].name}</h1>
//     <h1>${answers[i].id}</h1>
//     <h1>${answers[i].email}</h1>
// </body>
// </html>`
//     }
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>
<body>
    <h1>${name}</h1>
    <h1>${id}</h1>
    <h1>${email}</h1>
</body>
</html>`

export default generateHtml;