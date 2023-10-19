// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // return URL string to license badge link
    // look for license badge URL in the GitHub docs
      //if user says I'm using MIT license, a URL will be created to link
      if (license === 'none') {
        return ''
      }
      return `![License: ${license}](https://img.shields.io/badge/License-${license}-purple.svg)`
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'none') {
      return ''
    }
    return `* [License](#license)`
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'none') {
      return ''
    }
    return `## License
    
  This project uses the ${license} license
    `
    
  }
    
    //call badge
    //call link
    // or
    // return Markdown as a String
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
  //write md skeleton here
  # ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution Guidelines](#contributions)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributions
  
  ${data.contributions}
  
  ## Questions
  This project was created by [${data.github}](https://github.com/${data.github})
  Send me an email here: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  