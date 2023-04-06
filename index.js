// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { generateMarkdown } = require('./utils'); //decided to format prompt.answers in markdown instead, keeping everything in one file

function init() {
// TODO: Create an array of questions for user input
// wrapped inquirer code and writeFile in init fxn instead of writing them separately; not sure which way is preferable/best practice but this app seems small enough for this approach to be ok
const questions = [
    {
        name: 'title',
        message: 'What is the title of your app?',
        type: 'input',
    },
    {
        name: 'about',
        message: 'Describe the purpose and functionality of your app:',
        type: 'input',
    },
    {
        name: 'installation',
        message: 'How do you install or use your app? If it has been deployed, include a link to the deployment. (Installation section)',
        type: 'input',
    },
    {
        name: 'contributions',
        message: 'Describe any contributions made or resources used to create your app:',
        type: 'input',
    },
    {
        name: 'license',
        message: 'How is your app licensed (if applicable)?',
        type: 'input',
    }
];

    inquirer.prompt(questions).then((answers) => {
        const data = `
            # ${answers.title}

            ## About            
            ${answers.about}

            ## Installation 
            ${answers.installation}

            ## Contributions
            ${answers.contributions}

            ## License 
            ${answers.license}
        `;

            fs.writeFile('README.md', data, (err) => {
                if (err) throw err;
                console.log('README.md saved successfully.');
            });
    });
};

// Function call to initialize app
init();
