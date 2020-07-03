// jshint esversion:6

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [{
    type: "input",
    name: "title",
    message: "enter project title"

}, {
    type: "input",
    name: "description",
    message: "Enter project Description"

}, {
    type: "input",
    name: "instructions",
    message: "Enter installation instructions"
}, {
    type: "input",
    name: "information",
    message: "Enter usage information"
}, {
    type: "input",
    name: "guidelines",
    message: "Enter contribution guidelines"
}, {
    type: "input",
    name: "instruction",
    message: "Enter test instruction"
}, {
    type: "list",
    name: "license",
    message: "Choose license name",
    choices: ["mit", "mozilla", "apache-2.0", "wtfpl", "unlicense"]
}];

module.exports = questions;