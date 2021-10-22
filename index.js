// import inquirer, file system module and local generateContent module

// !! FIRST AFTER RECEIVING FEEDBACK I NEED TO PUSH THIS VERSION AS IT IS TO THE REPO !!

const inquirer = require('inquirer');
const fs = require('fs');
const generateSkelleton = require('./utils/content.js');
let managerData = [];
let menuData = '';
let engineerData = [];
let internData = [];

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
        let mC = managerCard(managerData);
        let eC = engineerCards(engineerData);
        let iC = internCards(internData);  
        let x = allTheCards(mC,eC,iC);
        writeToHTML('index.html',generateSkelleton(x));                 
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
    fs.writeFile(filename, Skelleton, (err) =>
     err ? console.log(err) : console.log('Success!'));
    
};

// Function to create the manager card and store it in a global variable
function managerCard (data){
    
    let mCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[0].managerName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">Employee ID: ${data[0].managerID}</p>
                <a href="#" class="card-link">Email: ${data[0].managerEmail}</a>
                <a href="#" class="card-link">Office: ${data[0].officeNumber}</a>
            </div>
        </div>`;
    return mCard;    
};

// Function to create engineer cards. Parses through the array of engineerData and returns an array of engineer cards.
function engineerCards (data){
    let engCards = [];
    for (let i = 0; i < data.length; i ++){
        engCards.push( `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].engineerName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          <p class="card-text">Employee ID: ${data[i].engineerID}</p>
          <a href="#" class="card-link">Email: ${data[i].engineerEmail}</a>
          <a href="#" class="card-link">GitHub: ${data[i].engineerGitHub}</a>
        </div>
        </div>`);
    };
    // returns an array of engineer cards
    return engCards;
};

// // Function to create intern cards. Parses through the array of internData and returns an array of intern cards.
function internCards (data){
    let intCards = [];
    for (let i = 0; i < data.length; i ++){
        intCards.push( `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].internName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <p class="card-text">Employee ID: ${data[i].internID}</p>
          <a href="#" class="card-link">Email: ${data[i].internEmail}</a>
          <a href="#" class="card-link">GitHub: ${data[i].internGitHub}</a>
        </div>
        </div>`);
    };
    // returns an array of intern cards
    return intCards;
};
// Creates a string from all the cards
function allTheCards(mCard, engCards, intCards) {
    
  
    return [mCard, ...engCards,...intCards].join('');   
    
}

// Call to initialize application
init();

module.exports = {
    init,
    menu,
    engineer,
    intern,
    writeToHTML,
    managerCard,
    engineerCards,
    internCards,
    allTheCards
}