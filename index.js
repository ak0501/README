// jshint esversion:6

const inquirer = require("inquirer");
const questions = require("./questions");
const generateReadme = require("./generatReadme");

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            generateReadme(response);
        })


        .catch((err) => console.error(err));

}
init();