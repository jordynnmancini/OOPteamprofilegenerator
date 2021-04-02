
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


module.exports = {
    managerQuestions,
    promptQuestion,
    engineerQuestions,
    internQuestions,
}; 