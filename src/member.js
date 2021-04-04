// writeFile with manager info 
const generateHTML = (answers) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Software Engineering Team</title>
</head>
<body>
    <h1>My Team</h1>
    <div class="card" style="width: 18rem;">
        <div class="card-img-top p-3 mb-2 bg-primary text-white"> ${answers.managerName} </br> Manager </div>
        <ul class="list-group list-group-flush p-3 mb-2 bg-light text-dark">
          <li class="list-group-item border border-4">ID: ${answers.managerId}</li>
          <li class="list-group-item border border-4">Email: <a href="mailto:${answers.managerEmail}">${answers.managerEmail}</a></li>
          <li class="list-group-item border border-4">Phone Number: ${answers.managerNumber}</li>
        </ul>
      </div>
    
`; 

};

//appendFile with engineer info  
const appendEngHTML = (answers) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-img-top p-3 mb-2 bg-primary text-white"> ${answers.engineerName} </br> Engineer </div>
  <ul class="list-group list-group-flush p-3 mb-2 bg-light text-dark">
    <li class="list-group-item border border-4">ID: ${answers.engineerId}</li>
    <li class="list-group-item border border-4">Email: ${answers.engineerEmail}</li>
    <li class="list-group-item border border-4"><a href="https://github.com/${answers.engineerGithub}">Github: ${answers.engineerGithub}</a></li>
  </ul>
</div>`;
}

//appendFile with intern info 
const appendInternHTML = (answers) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-img-top p-3 mb-2 bg-primary text-white"> ${answers.internName} </br> Intern </div>
  <ul class="list-group list-group-flush p-3 mb-2 bg-light text-dark">
    <li class="list-group-item border border-4">ID: ${answers.internId}</li>
    <li class="list-group-item border border-4">Email: ${answers.internEmail}</li>
    <li class="list-group-item border border-4">School: ${answers.internSchool}</li>
  </ul>
</div>`;
}


module.exports = {
  generateHTML,
  appendEngHTML,
  appendInternHTML,
}; 