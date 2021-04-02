//Imports
const inquirer = require('inquirer');
const fs = require('fs'); 
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern'); 
const {managerQuestions, promptQuestion, engineerQuestions, internQuestions} = require('./src/prompts');
const Engineer = require('./lib/engineer');

//Declare
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

            // fs.appendFile for new blocks of code 
            '<p>kncdnjdnfsdnf</p>'

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

     //writeFile - member.js folder 
        // const htmlPageContent = generateHTML(answers); 
        // fs.writeFile('dist/index.html', htmlPageContent, (err) =>
        // err ? console.log(err) : console.log('Successfully created index.html file!'));