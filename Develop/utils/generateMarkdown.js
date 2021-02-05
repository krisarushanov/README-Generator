// function to generate markdown for README
/*function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;*/
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your app used for?",
      name: "Project Overview"
    },
    {
      type: "input",
      message: "What was the motivation behind it?",
      name: "Motivation"
    },
    {
      type: "input",
      message: "What technologies are used in your app?",
      name: "Technology"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    
  });


