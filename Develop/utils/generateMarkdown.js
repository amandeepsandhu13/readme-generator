// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license type
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license type
    return `(https://opensource.org/licenses/${license})`;
} else {
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license) {
    // Return the license section with a markdown link
    return `This project is licensed under the [${license} License]${renderLicenseLink(license)}.`;
} else {
    return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Description

${data.description}

## Installation

To install necessary dependencies, run the following command:

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

${data.tests}


## Questions
If you have any questions, you can contact me via email at ${data.email}, or visit my [GitHub profile](https://github.com/${data.githubUsername}).

`;
}

module.exports = generateMarkdown;