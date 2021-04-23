const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const promptUser = () => {
    console.log
    (`
    ==========================
    PROJECT MARKDOWN GENERATOR
    ==========================
    `);

    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?",
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log("Please enter a project name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description for the project:",
            validate: infoInput => {
                if (infoInput) {
                    return true;
                } else {
                    console.log("Please enter a project description!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions for project.(Use commas to seperate each instruction):",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter initial startup command.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter instructions/purpose of the project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Who will contribute to this project? [Enter their github username(s)]:",
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log("Please a user contributing to this project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter an email where users can contact you:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please an email for this project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message:"Select a license for your project.",
            choices: [
                "MIT",
                "The Unlicence",
                "Apache License 2.0",
                "Mozilla Public License 2.0",
                "Boost Software License 1.0"
            ],
            default: "MIT"
        }
    ]);
}



promptUser()
    .then(markdownData => {
        const markdown = generateMarkdown(markdownData);

        fs.writeFile("./dist/README.md", markdown, err => {
            if (err) throw new Error(err);

            console.log("New README file has been created in the `dist` folder!");
        });
    }) ;