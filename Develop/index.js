const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input", // describes input
      message: "What is your Github username?",// Question
      name: "Username" // variable we are going to store it in
    },
    {
      
      type: "input", // describes input
      message: "What us your email address?",// Question
      name: "Email" // variable we are going to store it in
    },
    {
      type: "input", // describes input
      message: "Enter the title of your project",// Question
      name: "ProjectTitle" // variable we are going to store it in
    },
    {
      type: "input",
      message: "Enter a description for your project",
      name: "Description"
    },
    {
      type: "input",
      message: "How to install project",
      name: "Installation"
    },
    {
      type: "input",
      message: "What kind of license should your project have?",
      name: "License"
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "Dependencies"
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "Tests"
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "Usage"
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "Contribute"
    }
  ]);

const generateREADME = (answers) =>
`# ${answers.ProjectTitle} readme
## Description: ${answers.Description}
## Installation: ${answers.Installation}
## License: ${answers.License}
## Dependencies: ${answers.Dependencies}
## Tests: ${answers.Tests}
## Usage: ${answers.Usage}
## Contribute: ${answers.Contribute}`;

promptUser()
  .then((answers) => writeFileAsync('readme.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
