const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is your name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office phone number?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            when: (answers) => answers.role === 'Engineer', 
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where do you go to school?',
            when: (answers) => answers.role === 'Intern', 
        }
    ])
    .then((answers) => {
        //writeFile 
    });