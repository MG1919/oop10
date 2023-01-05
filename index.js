const inquirer = require("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
const generateHTML = require("./utils/generateHTML");
const fs = require("fs");
let employeeArr = [];

start();

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you like to add Team member?",
        name: "option",
        choices: ["Add Manager", "Add Intern", "Add Engineer", "Exit App"],
      },
    ])
    .then((response) => {
      switch (response.option) {
        case "Add Manager":
          addManager();
          break;

        case "Add Intern":
          addIntern();
          break;

        case "Add Engineer":
          addEngineer();
          break;
        default:
          exitApp();
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "enter Manager name: ",
      },
      {
        type: "input",
        name: "id",
        message: "enter Manager ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "enter Manager Email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "enter Manager Office Number: ",
      },
    ])
    .then((response) => {
      const newHire = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employeeArr.push(newHire);
      start();
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "enter Engineer name: ",
      },
      {
        type: "input",
        name: "id",
        message: "enter Engineer ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "enter Engineer Email: ",
      },
      {
        type: "input",
        name: "gitHub",
        message: "enter Engineer GitHub: ",
      },
    ])
    .then((response) => {
      const newHire = new Engineer(
        response.name,
        response.id,
        response.email,
        response.gitHub
      );
      employeeArr.push(newHire);
      start();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "enter Intern name: ",
      },
      {
        type: "input",
        name: "id",
        message: "enter Intern ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "enter Intern Email: ",
      },
      {
        type: "input",
        name: "schoolName",
        message: "enter Intern School Name: ",
      },
    ])
    .then((response) => {
      const newHire = new Intern(
        response.name,
        response.id,
        response.email,
        response.schoolName
      );
      employeeArr.push(newHire);
      start();
    });
}

function exitApp() {
  console.log(employeeArr);
  fs.writeFileSync("index.html", generateHTML(employeeArr), function (err) {
    if (err) throw err;
  });
  console.log("File generated");
  process.exit(0);
}
