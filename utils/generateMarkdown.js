function licenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`; 
}


function licenseInfo(license) {    
    return `[License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  # Table of Contents
  - [DESCRIPTION](#description)
  
  - [USAGE](#usage)
  
  - [INSTALLATION](#installation)
  
  - [LICENSE](#license)
  
  - [CREDITS/CONTRIBUTING](#contributing)
  
  - [TESTING](#test)
  
  - [CONTACT/QUESTIONS](#contactGH)

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}
  
  ## License
  ${licenseBadge(data.license)}

  ${licenseInfo()}
  
  ## Credits/contributors:
  ${data.contributing}

  ## Testing
  ${data.test}

  ## Questions/Concerns/or contact me!
  GitHub Profile: [${data.contactGH}](https://www.github.com/${data.contactGH})
 
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;