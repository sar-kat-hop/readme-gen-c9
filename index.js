// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); //note to self: don't enclose importing function in { }

// opted to wrap everything in init fxn instead of having it separate
function init() {
// TODO: Create an array of questions for user input

const questions = [
    {
        name: 'title',
        message: '(Title) What is the title of your app?',
        type: 'input',
    },
    {
        name: 'about',
        message: '(About) Describe the purpose and functionality of your app:',
        type: 'input',
    },
    {
        name: 'installation',
        message: '(Installation) How do you install your app?',
        type: 'input',
    },
    {
        name: 'usage',
        message: '(Usage) How do you use your app?',
        type: 'input',
    },
        // commented out code below is for possible future functionality
    // {
    //     name: 'demoLink',
    //     message: 'If you have a link to a walkthrough/demo video, enter it here: ',
    //     type: 'input',
    // },
    // {
    //     name: 'deployLink',
    //     message: 'Is your app deployed anywhere? Include a link here if applicable:',
    //     type: 'input',
    // },
    {
        name: 'tests',
        message: '(Tests) What are the instructions, if any, for testing the app?',
        type: 'input',
    },
    {
        name: 'contributions',
        message: '(Contributing) Describe any contributions made or resources used to create your app:',
        type: 'input',
    },
    {
        name: 'questions',
        message: '(Questions) How can people reach you if they have questions?',
        type: 'input',
    },
    {
        name: 'license',
        message: '(License) How is your app licensed?',
        type: 'list',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'N/A'],
    }
];

    inquirer.prompt(questions).then((answers) => {
        //call generateMarkdown
        const data = generateMarkdown(answers);
        
        //write to README.md file
            fs.writeFile('README.md', data, (err) => {
                if(err) throw err;
                console.log('README.md saved.');
            });
    });
};

// Function call to initialize app
init();
