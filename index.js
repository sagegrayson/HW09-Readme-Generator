// NOTES FROM ASSIGNMENT README ===========================
// Sections: Title, Description, TOC, Installation, Usage, License, Contributing, Tests, Questions
// Choose license from list of options - add badge near top and "covered by" under license
// prompt for github username also creates link and adds both to questions
// email address also to questions with instructions on "how to reach with additional questions"
// working table of content links

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		message: "What is your github username?",
		name: "username",
	},
	{
		type: "input",
		message: "What is your email address?",
		name: "useremail",
	},
	{
		type: "input",
		message: "What is the name of this project?",
		name: "title",
	},
	{
		type: "input",
		message: "Write a short description of this project.",
		name: "description",
	},
	{
		type: "input",
		message: "Write instructions on how to install this project.",
		name: "installation",
	},
	{
		type: "input",
		message: "Write instructions on usage of this project.",
		name: "usage",
	},
	// would like to see multiple users either through inquirer or by checking if blank
	{
		type: "input",
		message: "If any, what other users contributed to this project?",
		name: "contributers",
	},
	{
		type: "list",
		message: "Choose a license for this project.",
		name: "license",
		choices: [
			"Creative Commons",
			"Do WTF You Want To",
			"GNU General",
			"MIT",
			// "Microsoft Public",
			"Mozilla Public",
			// "Open Software",
			"The Unlicense",
		],
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), (err) => {
		if (err) {
			throw err;
		} else {
			console.log("passed to generateMarkdown");
		}
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((responses) => {
		console.log(responses);
		writeToFile("./generated/READMEgen.md", responses);
	});
}

// Function call to initialize app
init();
