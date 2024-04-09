// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let badge = '';
let badgeL = '';
let section = '';
function renderLicenseBadge(data) {
  console.log(data);
  if (data.License == "Apache 2.0 License") {
     badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

  } if (data.License == "GNU GPLv3") {
     badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

  } if (data.License == "MIT Lincense") {
     badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  } 
  return badge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.License == "Apache 2.0 License") {
     badgeL = '(https://opensource.org/licenses/Apache-2.0)';

  } if (data.License == "GNU GPLv3") {
     badgeL = '(https://www.gnu.org/licenses/gpl-3.0)';

  } if (data.License == "MIT Lincense") {
     badgeL = '(https://opensource.org/licenses/MIT)';

  } 
  return badgeL;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) { 
if (data.License == "Apache 2.0 License" || data.License == "GNU GPLv3" || data.License == "MIT Lincense" ) {

  section = '## License '
}

return section;

}






// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

//module.exports = generateMarkdown;

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
} 
