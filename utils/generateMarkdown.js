// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

  }  else if (license === 'GPL 3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

  } else {
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';

  } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';

  } else if (license === 'GPL 3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0';

  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || license === 'Apache 2.0' || license === 'GPL 3.0') {
    return `## License

Licensed under [${license}](${renderLicenseLink(license)}).

${renderLicenseBadge(license)}
`

  } else {
    return '';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}

## About
${answers.about}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributions}

## Tests
${answers.tests}

## Questions
${answers.questions}

${renderLicenseSection(answers.license)} 
`;
};

module.exports = generateMarkdown; //not to self: do not include ( ) at end
