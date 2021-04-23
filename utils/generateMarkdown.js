function generateMarkdown(data) {
  return `# ${data.name}

  ## Description 
  ${data.description}  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#credits)
  * [License](#license)
  
  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage}

  ## Contributing
  [Link to creator of project](https://github.com/${data.credits})

  ## Questions
  Any questions pertaining to this project can be emailed to (mailto:${data.email})

  ## License
  This project is licensed under the terms of the ${data.license} license.
  `;
}


module.exports = generateMarkdown;
