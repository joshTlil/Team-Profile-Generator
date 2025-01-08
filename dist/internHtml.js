const internHtml = (intern) =>
`<div class="card" id="intern">
<div class="cardHeader">
<h1>${intern.name}</h1>
<h1>Intern</h1>
</div>
<div class="info">
<h1 class="id">${intern.id}</h1>
<h1 class="email">${intern.email}</h1>
<h1 class="school">${intern.school}</h1>
</div>
</div>
` 

export default internHtml