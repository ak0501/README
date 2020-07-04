// jshint esversion:6

const fs = require("fs");
const util = require("util");
const licenceTyp = require("./badges");
const asyncFilewrite = util.promisify(fs.writeFile);
module.exports = function (response) {
    response.license = (licenceTyp[response.license]);



    const installationLink = `## <a href='#Installation'>Reference</a>`;
    const usage = `## <a name ='UsageInstruction'>Usage</a>`;
    const test = `## <a name = 'TestInstruction'>Test</a>`;
    const tableOfContents = `##Table of content
* [Installation Instruction](#Installation) 

 * [Usage Instruction](#UsageInstruction)

 * [Test Instruction](#TestInstruction)`;

    const githubLink = `[Github Page](https://github.com/${response.username})`;



    return asyncFilewrite("Readme.md", `# ${response.title}\n\n${response.license}\n\n${response.description}\n\n ${response.instruction}\n\n${tableOfContents}\n\n ${test}\n\n ${installationLink}\n\n${usage}\n\n ${githubLink}\n\n${response.emailaddress}`);
};