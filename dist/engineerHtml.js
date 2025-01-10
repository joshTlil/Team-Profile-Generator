const engineerHtml = (engineer) => 
`<div class="card" id="engineer">
<div class="cardHeader">
<h1>${engineer.name}</h1>
<h1>Engineer</h1>
</div>
<div class="info">
<p class="id">ID:${engineer.id}</p>
<a href="#">Email:${engineer.email}</a>
<p class="github">Github:${engineer.github}</p>
</div>
</div>
` 

export default engineerHtml