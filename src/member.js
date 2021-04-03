// generate starter HTML with manager info (used for fs.writeFile)
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
    
</body>
</html>`; 

};

// generate Engineer Card (appendFile)

//generate Intern Card (appendFile)

module.exports = generateHTML; 