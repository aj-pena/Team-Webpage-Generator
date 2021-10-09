// import inquirer, file system module and local generateContent module
const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./content.js');

// Array of questions
let mnanagerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the team manager name',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter the team manager employee ID',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the team manager email',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the team manager office number',
    },
    {
        type: 'list',
        name: 'nextStep',
        message: 'What would you like to do next?',
        choices: ['Add Engineer','Add Intern','Finish'],
    },
        
];

let engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter the engineer name',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Enter the engineer employee ID',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter the engineer email',
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'Enter the engineer GitHub username',
    },
    {
        type: 'list',
        name: 'nextStep',
        message: 'What would you like to do next?',
        choices: ['Add Engineer','Add Intern','Finish'],
    },
];

let internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the intern name',
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Enter the intern employee ID',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the intern email',
    },
    {
        type: 'input',
        name: 'internGitHub',
        message: 'Enter the intern GitHub username',
    },
    {
        type: 'list',
        name: 'nextStep',
        message: 'What would you like to do next?',
        choices: ['Add Engineer','Add Intern','Finish'],
    },
];

// function to initialize the app making questions, generate content from the answers and then calling the function to write the content on the HTML file
function init() {
    inquirer.prompt(questions).then((data) => {
        let htmlString = generateContent(data);
        writeToHTML('index.html',htmlString);
    }
    );
};
// function to write index.html file using file system
function writeToHTML (filename, data){
    fs.writeFile(filename, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// Call to initialize application

init();