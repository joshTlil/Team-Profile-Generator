const generateHtml = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>
<body>
    <h1>${answers.name}</h1>
    <h1>${answers.id}</h1>
    <h1>${answers.email}</h1>
</body>
</html>`

export default generateHtml;