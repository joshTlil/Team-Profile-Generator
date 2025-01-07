const managerHtml = (manager) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>
<header>My Team</header>
<body>
<h1>${manager.name}</h1>
<h1>${manager.id}</h1>
<h1>${manager.email}</h1>
<h1>${manager.officeNumber}</h1>
`

export default managerHtml