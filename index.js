// jshint esversion:6

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const questions = require("./questions");
const generateReadme = require("./generatReadme");

function init() {
    inquirer
        .prompt(questions)
        .then((response) => generateReadme(response))
        .catch((err) => console.error(err));
}

init();