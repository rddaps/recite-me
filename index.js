// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Enter credit guidelines:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
          } else {
            console.log('README.md generated successfully!');
          }
        });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const content = generateMarkdown(data);
    });
}

// Function call to initialize app
init();