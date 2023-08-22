// packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const readmeMagic = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'contactGH',
        message: 'What is your GitHub username?'
    },
    {  
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },

    {   
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },

    {   
        type: 'input',
        name: 'usage',
        message: 'Please describe your applications usage.'
    },

    {   
        type: 'input',
        name: 'installation',
        message: 'Enter any required installation instructions.'
    },
    {   
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license!',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'Other']
    },

    {   
        type: 'input',
        name: 'contributing',
        message: 'Please list any and all contributors or HOW to contribute to your project!'
    },

    {   
        type: 'input',
        name: 'test',
        message: 'Explain testing procedures and instructions on how to run necessary tests!'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email.'
    }
];

//write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, readmeMagic(data), (err) =>
  err ? console.error(err) : console.log('Success! All inputs written to README.md file!')
);
}

//function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then(response => {
                writeToFile('generatedREADME.md', response)
            })

}

//Function call to initialize app
init();