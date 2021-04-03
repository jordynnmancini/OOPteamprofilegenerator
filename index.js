//Imports
const inquirer = require('inquirer');
const fs = require('fs'); 
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 
const {managerQuestions, promptQuestion, engineerQuestions, internQuestions} = require('./src/prompts');
const generateHTML = require('./src/member'); 

//Declare (might not need this?)
let fullTeamArray = []; 

//Initialize when user enters "node index.js"
Initialize(); 

function Initialize() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            // use constructor function to create a new manager / push to an array of teammates
            const teamManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
            fullTeamArray.push(teamManager); 

            //writeFile
            const htmlPageContent = generateHTML(answers);
            
            fs.writeFile('./dist/index.html', htmlPageContent, (err) => 
            err ? console.log(err) : console.log('Thank you for adding a manager!'));

            addTeamMembers();
        });
};

function addTeamMembers() {
    inquirer
        .prompt(promptQuestion)
        .then((answer) => {
            switch (answer.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'I dont want to add any more team members':
                    console.log('You have completed building your team! Check the /dist folder for your final html.')
                    break; 
            }
        });
};

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            // constructor
            const teamMember = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            fullTeamArray.push(teamMember); 

            // fs.appendFile

            addTeamMembers();

        });
};

function addIntern() {
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        //constructor
        const teamMember = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        fullTeamArray.push(teamMember);  

        //fsAppendFile

        addTeamMembers(); 
    })
}
