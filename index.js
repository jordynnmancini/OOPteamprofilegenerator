const inquirer = require('inquirer');
const fs = require('fs'); 
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern'); 


//maybe put this in src folder?
// const generateHTML = (answers) =>
// `enter HTML code here`; 


const managerQuestions = [
    {
        type: 'input',
        name:'managerName',
        message: 'What is the team managers name?', 
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team managers ID?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers email?',
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: 'What is the team managers office phone number?',
    },
];

const promptQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern','I dont want to add any more team members'],
    },
]; 

const internQuestions = [
    {
        type: 'input',
        name:'internName',
        message: 'What is your interns name?', 
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is your interns ID?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your interns email?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does your intern attend?',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is your engineers name?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is your engineers ID?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your engineers email?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is your engineers Github username?',
    },
];

inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        // use constructor function to create a new manager / push to an array of teammates
        //writeFile
        addTeamMembers(); 
       
    });

function addTeamMembers() {
    inquirer
        .prompt(promptQuestion)
        .then((answer) => {
            switch (answer.promptQuestion) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'I dont want to add any more team members':
                    //process.exit
                    console.log('finished!')
                    break; 
            }
        });
};

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)

    // fs.appendFile for new blocks of code 
        '<p>kncdnjdnfsdnf</p>'
}

     //writeFile
        // const htmlPageContent = generateHTML(answers); 
        // fs.writeFile('dist/index.html', htmlPageContent, (err) =>
        // err ? console.log(err) : console.log('Successfully created index.html file!'));