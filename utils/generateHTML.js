function generateHTML(employeeArr) {
  var htmlCards = "";
  for (let index = 0; index < employeeArr.length; index++) {
    console.log(employeeArr[index].getRole());
    switch (employeeArr[index].getRole()) {
      case "Engineer":
        htmlCards += generateEngineerCard(employeeArr[index]);
        break;
      case "Intern":
        htmlCards += generateInternCard(employeeArr[index]);
        break;
      case "Manager":
        htmlCards += generateManagerCard(employeeArr[index]);
        break;
    }
  }
  var HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TeamProfileGenerator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <h1>Team Profile Generator</h1>
    ${htmlCards}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>
    `;
  console.log(HTML);
  return HTML;
}

function generateEngineerCard(emp) {
  return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${emp.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">ID:${emp.id}.</p>
    <a href="mailto:${emp.email}" class="card-link">Email: ${emp.email}</a>
    <a href="https://github.com/${emp.gitHub}" class="card-link">Github</a>
  </div>
</div>
    `;
}
function generateManagerCard(emp) {
  return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${emp.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">ID:${emp.id}.</p>
    <p class="card-text">OfficeNumber:${emp.officeNumber}.</p>
    <a href="mailto:${emp.email}" class="card-link">Email: ${emp.email}</a>
    
  </div>
</div>
    `;
}
function generateInternCard(emp) {
  return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${emp.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID:${emp.id}.</p>
    <p class="card-text">OfficeNumber:${emp.officeNumber}.</p>
    <a href="mailto:${emp.email}" class="card-link">Email: ${emp.email}</a>
    
  </div>
</div>
    `;
}

module.exports = generateHTML;
