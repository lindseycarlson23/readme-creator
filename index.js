// TODO: Include packages needed for this application
// import file here = require('path to file');
// import generateMarkdown from './generateMarkdown';
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')



// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
// CALL IN THE FS SYSTEM
// FS WILL CREATE THE FILE AND PLACE THE DATA INSIDE
// CREATES THE DATA THAT NEEDS TO GO INSIDE BY IMPORTING THE GENERATE MARKDOWN FILE AND CALLING THE FUNCTIONS WITHIN
function writeToFile(fileName, data) {
  //import generatMarkdown and call functions
    generateMarkdown(data);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log('Successfully created ReadMe.md!')
  );




}
// TODO: Create a function to initialize app
//THIS IS WHERE INQUIRER QUESTIONS GO
//GRAN ANSWERS IN .THEN IN THE RESPONSE OBJECT
function init() {
  //Inquirer Prompt(insert questions here)
 
inquirer
  .prompt(questions)
  .then((data) => {
  writeToFile('ReadMe.md', data);
    
  })

  
 // .then(response) => {
    //writeToFile(README.md, response)
  // }
}
// Function call to initialize app

init();


// User answers questions and we receive response object
// write response object value to HTML file
// writeToFile from fs
    // Data?
    // html file name
    // string Datatype
    // JSONstringify or backticks creates a string
        //backticks = template literal from object
        // `<h1>${response.name} </h1>`
    // function toHTML(object) {
        //return `<h1>${response.name} </h1>`
    // };


//she recommends that you write out HTML

//use bootstrap to write skeleton file