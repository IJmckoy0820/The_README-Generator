// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const ts = require('./utils/generateMarkdown.js');
let badge = '';
// TODO: Create an array of questions for user input
const questions = ['Prodject Title name ?', 'provide a short description of project', 'what steps required to install project', ' provide instructions on how to use it ', ' what kind of license required for project', 'how to contribute to project', 'provide example of how to run test', ' Github?', 'Email address'];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Prodject Title name ?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'provide a short description of project',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'what steps required to install project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: ' provide instructions on how to use it:',
        },
        {
            type: 'list',
            name: 'License',
            message: ' what kind of license required for project',
            choices: ['MIT Lincense', 'GNU GPLv3', 'Apache 2.0 License','None']
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Describe any test use for prodject',
        },

        {
            type: 'input',
            name: 'Contributing',
            message: 'how to contribute to project',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        },
        {
            type: 'input',
            name: 'Linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ]);
};

const generateREADME = ({ Title, Description, Installation, Usage, Contributing, Github, Email, Linkedin, License,Test }, badge, badgeL,section) =>
    `# ${Title} ${badge}



## Description

${Description}



## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#License)
- [Test](#Tests)
- [Question](#Questions?)

## Installation

${Installation}


## Usage

${Usage}

## Contributing
${Contributing}

${section}
${License} 
${badgeL}

## Tests
${Test}

## Questions?
If you have any Questions you can reach me with the following infomation:

 Linked: ${Linkedin}
 Email: ${Email}
Github: ${Github}

`

// TODO: Create a function to write README file
function writeToFile(Filename, data) {
    fs.writeFile(Filename, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );

}

// TODO: Create a function to initialize app
function init() {
    promptUser()

        .then((data) => {
            const section = ts.renderLicenseSection(data);
            const badge = ts.renderLicenseBadge(data);
            const badgeL = ts.renderLicenseLink(data);
            const txtPagecontent = generateREADME(data, badge, badgeL, section);
            const filename = 'README.md';
            console.log(badge);

            writeToFile(filename, txtPagecontent);

        })

}

// Function call to initialize app
init();
