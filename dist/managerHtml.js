const managerHtml = (manager) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>
<header><h1>My Team</h1></header>
<body>
<div class="flexContainer">
<div class="card" id="manager">
<div class="cardHeader">
<h1>${manager.name}</h1>
<h1>Manager</h1>
</div>
<div class="info">
<h1 class="id">${manager.id}</h1>
<h1 class="email">${manager.email}</h1>
<h1 class="num">${manager.officeNumber}</h1>
</div>
</div>
`

export default managerHtml