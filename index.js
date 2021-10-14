// const { writeToFile, copyFile } = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    
    {
      type: 'input',
      name: 'title',
      message: "What is the name of your project?"
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GNU GPLv3', 'Boost', 'Unilicense', 'Other', 'None']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to start installation?',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be used for tests?',
      default: 'npm test'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should the user use the repo?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for adding to the repo?'
    }
  ];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Creating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
