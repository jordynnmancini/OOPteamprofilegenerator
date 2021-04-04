//Imports
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { managerQuestions, promptQuestion, engineerQuestions, internQuestions } = require('./src/prompts');
const { generateHTML, appendEngHTML, appendInternHTML } = require('./src/member');

//Initialize when user enters "node index.js"
Initialize();

function Initialize() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            // use constructor function to create a new Manager 
            const teamManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);

            //writeFile
            const htmlPageContent = generateHTML(answers);

            fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('started html file with manager info card'));

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
                    fs.appendFile('./dist/index.html', `</body> </html>`, (err) =>
                        err ? console.log(err) : console.log('Finished'));
                    console.log('You have completed building your team! Check the /dist folder for your final html.')
                    break;
            }
        });
};

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            // constructor to create a new Engineer
            const teamMember = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

            //appendFile
            const htmlPageContent = appendEngHTML(answers);

            fs.appendFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('append engineer info card'));

            addTeamMembers();
        });
};

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            //constructor to create new Intern
            const teamMember = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

            //appendFile
            const htmlPageContent = appendInternHTML(answers);

            fs.appendFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('append intern info card'));


            addTeamMembers();
        })
};
