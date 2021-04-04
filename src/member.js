// writeFile with manager info 
const generateHTML = (answers) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"> 
    <title>My Software Engineering Team</title>
</head>
<body>
    <h1>My Team</h1>
    <div class="cards-container">
    <div class="card" style="width: 18rem;">
        <div class="card-img-top p-3 mb-2 bg-primary text-white"><h3>${answers.managerName}</h3> <i class="fas fa-mug-hot"></i> Manager </div>
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
  <div class="card-img-top p-3 mb-2 bg-primary text-white"><h3>${answers.engineerName}</h3> <i class="fas fa-glasses"></i> Engineer </div>
  <ul class="list-group list-group-flush p-3 mb-2 bg-light text-dark">
    <li class="list-group-item border border-4">ID: ${answers.engineerId}</li>
    <li class="list-group-item border border-4">Email: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></li>
    <li class="list-group-item border border-4">Github: <a target="_blank" href="https://github.com/${answers.engineerGithub}">${answers.engineerGithub}</a></li>
  </ul>
</div>`;
}

//appendFile with intern info 
const appendInternHTML = (answers) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-img-top p-3 mb-2 bg-primary text-white"><h3>${answers.internName}</h3> <i class="fas fa-user-graduate"></i> Intern </div>
  <ul class="list-group list-group-flush p-3 mb-2 bg-light text-dark">
    <li class="list-group-item border border-4">ID: ${answers.internId}</li>
    <li class="list-group-item border border-4">Email: <a href="mailto:${answers.internEmail}">${answers.internEmail}</a></li>
    <li class="list-group-item border border-4">School: ${answers.internSchool}</li>
  </ul>
</div>`;
}


module.exports = {
  generateHTML,
  appendEngHTML,
  appendInternHTML,
}; 