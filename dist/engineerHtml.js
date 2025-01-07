const engineerHtml = (engineer) => 
`<div class="card" id="engineer">
<div class="cardHeader">
<h1>${engineer.name}</h1>
<h1>Engineer</h1>
</div>
<div class="info">
<h1 class="id">${engineer.id}</h1>
<h1 class="email">${engineer.email}</h1>
<h1 class="github">${engineer.github}</h1>
</div>
</div>
` 

export default engineerHtml