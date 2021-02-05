var inquirer = require("inquirer");
var fs = require("fs");
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
    ]) // once all questions are answered we can use the response below. We will now need to stringify  th eobject so we can store i tin a file as a string(text file)
    .then(function(response) {
  
        
      
        var responseString = JSON.stringify(response);

        fs.writeFile("readme.md", responseString, function(err) {
        
          if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
        });
        


    
    // function to write README file goes in the response
       // function writeToFile("readme.md", responseString) {
       // }
//
    // function to initialize program
        //function init() {

        //}

    // function call to initialize program
        //init();
    
    console.log("Complete!");
    });


