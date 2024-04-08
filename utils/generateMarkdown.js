// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let badge = '';
let badgeL ='';
let section = '';
function renderLicenseBadge(badge) {
if ( answer.license == "Apache 2.0 License"){
 let badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

} if ( answer.license == "GNU GPLv3"){
  let badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
 
 } if ( answer.license == "MIT Lincense"){
  let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 
 } else {
  return badge = '';

 }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( answer.license == "Apache 2.0 License"){
    let badge = '(https://opensource.org/licenses/Apache-2.0)';
   
   } if ( answer.license == "GNU GPLv3"){
     let badge = '(https://www.gnu.org/licenses/gpl-3.0)';
    
    } if ( answer.license == "MIT Lincense"){
     let badge = '(https://opensource.org/licenses/MIT)';
    
    } else {
     return badge = '';
   
    }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
