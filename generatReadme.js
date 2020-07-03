// jshint esversion:6
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const licenceTyp = require("./badges.json");
const asyncFilewrite = util.promisify(fs.writeFile);
module.exports = function (response) {
    response.licence = licenceTyp[response.licence]

    const installationLink = "##" + "<a name = 'reference</a>";

    const tableofContents = "[Installation Instructions](#install)\n\n etc";

    return asyncFilewrite('README.md', `#${response.title} \n\n + ${response.license} \n\n ${tableofContents}`);
};