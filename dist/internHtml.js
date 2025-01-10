const internHtml = (intern) =>
`<div class="card" id="intern">
<div class="cardHeader">
<h1>${intern.name}</h1>
<h1>Intern</h1>
</div>
<div class="info">
<p class="id">ID:${intern.id}</p>
<a href="#">Email:${intern.email}</a>
<p class="school">Office number:${intern.school}</p>
</div>
</div>
` 

export default internHtml