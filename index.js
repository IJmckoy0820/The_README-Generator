// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const ts = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ['Prodject Title name ?','provide a short description of project','what steps required to install project',' provide instructions on how to use it ',' what kind of license required for project','how to contribute to project', 'provide example of how to run test', ' Github?','Email address' ];

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
        choices: ['MIT Lincense', 'GNU GPLv3','Apache 2.0 License' ]
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

const generateREADME = ({ Title, description, Installation, Usage, Contributing, Github, Email, Linkedin, License }) =>
`# <Your-Project-Title> 

${Title}

## Description

${description}



## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

${Installation}


## Usage

${Usage}

## Contrbuting
${Contributing}
## License
${License} 

## Tests
{Test}

## Questions?
If you have any Questions you can reach me with the following infomation:

${Linkedin}
${Email}
${Github}

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

.then((answer) => {
//renderLicenseBadge(badge);
//renderLicenseLink(badgeL);

const txtPagecontent = generateREADME(answer);
const filename = 'README.md';


writeToFile( filename, txtPagecontent);

})

}

// Function call to initialize app
init();
