// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {
// TODO: Create an array of questions for user input

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
        message: 'How is your app licensed?',
        type: 'list',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'N/A'],
    }
];

    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        
            fs.writeFile('README.md', data, (err) => {
                if(err) throw err;
                console.log('README.md saved.');
            });
    });
};

//  const data = `# ${answers.title}

// ## About            
// ${answers.about}

// ## Installation 
// ${answers.installation}

// ## Contributions
// ${answers.contributions}

// ## License 
// ${answers.license}
// `;

//             fs.writeFile('README.md', data, (err) => {
//                 if (err) throw err;
//                 console.log('README.md saved successfully.');
//             });
//     });
// };

// Function call to initialize app
init();
