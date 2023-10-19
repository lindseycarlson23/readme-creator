
function renderLicenseBadge(license) {
    
      if (license === 'none') {
        return ''
      }
      return `![License: ${license}](https://img.shields.io/badge/License-${license}-purple.svg)`
  }
  
  // Function that returns the license link
  function renderLicenseLink(license) {
    if (license === 'none') {
      return ''
    }
    return `* [License](#license)`
  }
  
  function renderLicenseSection(license) {
    if (license === 'none') {
      return ''
    }
    return `## License
    
  This project uses the ${license} license
    `
    
  }
    
   // Function to generate markdown for README
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
  