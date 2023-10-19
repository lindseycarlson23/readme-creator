
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


 // An array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is your GitHub user name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What information does the user require to contribute?',
      name: 'contributions',
    },
    {
      type: 'list',
      message: 'What license did you use?',
      name: 'license',
      choices: ['MIT', 'none']
    },
];

// Function to write README file

function writeToFile(fileName, data) {
  //import generatMarkdown and call functions
    generateMarkdown(data);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log('Successfully created ReadMe.md!')
  );

}
// Function to initialize app

function init() {
 
inquirer
  .prompt(questions)
  .then((data) => {
  writeToFile('ReadMe.md', data);
  })

}


init();

