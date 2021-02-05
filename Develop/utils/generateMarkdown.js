// function to generate markdown for README
/*function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;*/
var inquirer = require("inquirer");
// Inquirer has method and properies including propmpt which is presented as an array where every questio is an object
inquirer
  .prompt([
    {
      type: "input", // describes input
      message: "What is your app used for?",// Question
      name: "Project Overview" // variable we are going to store it in
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
  ]) // once all questions are answered we can use the response below
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Complete!");
    }
    
  });


