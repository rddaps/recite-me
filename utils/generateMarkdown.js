function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  const licensed = renderLicenseLink(license);

  if(licensed) {
    return `## License\n\nThis project is licensed under the ${license} license. See the [${license} License](${licensed}) for more information.\n`;
  }
  return '';
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

This project is licensed under the ${data.license} license.

## Tests

${data.tests}

## Questions/Comments/Concerns

GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})

For any questions, comments and/or concerns, please contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;