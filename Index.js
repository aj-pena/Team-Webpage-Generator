// import inquirer, file system module and local generateContent module
const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./content.js');
const generateSkelleton = require('./content.js');
let managerData = [];
let engineerData = [];
let internData = [];
let menuData = '';

// Arrays of questions
let managerQuestions = [
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
    }
        
];

// Menu question
let menuQuestion = {

    type: 'list',
    name: 'nextStep',
    message: 'What would you like to do next?',
    choices: ['Add Engineer','Add Intern','Finish'],
}

// Engineer questions
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
    }
];

// Intern questions
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
    }
];

// function to initialize the app making manager questions, asking menu questions and checking the answer to call the appropriate function.
function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        managerData.push(answers);
        console.log(managerData);
        menu();        
    }
    );
    
};

// Function to prompt menu, call prompts from user input, generate content from the answers and then call the function to write the content on the HTML file when the user selects Finish
function menu() {
    inquirer.prompt(menuQuestion).then((answer) => {
       menuData = answer.nextStep; 
       if (menuData === 'Add Engineer'){
        engineer();
       }
       if (menuData === 'Add Intern'){
        intern();
       }
       if (menuData === 'Finish'){
         let htmlSkelleton = generateSkelleton();
         writeToHTML('index.html',htmlSkelleton);
        }
    });
    
};

// Function to prompt engineer questions
function engineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        engineerData.push(answers);
        console.log(engineerData);
        menu();
    });
    
};

// Function to prompt intern questions
function intern() {
    inquirer.prompt(internQuestions).then((answers) => {
        internData.push(answers);
        console.log(internData);
        menu();
    });

};

// function to write index.html basic skelleton using file system
function writeToHTML (filename, Skelleton){
    fs.writeFile(filename, Skelleton, (err) => err ? console.log(err) : console.log('Success!'));
};

// Call to initialize application
init();