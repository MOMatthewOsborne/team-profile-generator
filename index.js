const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];
const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const questionsManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager',
          },
          {
            type: 'input',
            name: 'managerId',
            message: 'Please enter the manager employee number',
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the managers email address',
          },
          {
            type: 'input',
            name: 'managerOffice',
            message: 'Please enter the managers office number',
          },
          {
            type: 'confirm',
            name: 'addNew',
            message: 'Would you like to add another member to your team?'
          }
    
    ]).then(answers => {
      
      console.log(answers)
      const manager = new Manager(answers.managerName, answers.managerId,answers.managerEmail, answers.managerOffice)
      team.push(manager)
    if (answers.addNew) {
      addEmployee()
    } else {
      process.exit()
    }
    })
    }
    const addEmployee = () => {
      inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Select Employee type:',
          choices: ['Engineer', 'Intern']
        },
        {
          type: 'input',
          name: 'empName',
          message: 'What is the name of the employee',
        },
        {
          type: 'input',
          name: 'empId',
          message: 'Please enter the employee number',
        },
        {
          type: 'input',
          name: 'empEmail',
          message: 'Please enter the email address',
        },
        {
          type: 'input',
          // when: answer => {answer.type === "Intern"},
          name: 'empGithub',
          message: 'Please enter the engineers Github'
        },
        {
          type: 'input',
          name: 'empSchool',
          message: 'Please enter the interns school'
        },
        {
          type: 'confirm',
          name: 'addNew',
          message: 'Would you like to add another member to your team?'
        }

      ]).then(answers => {
        console.log(answers)
        if (answers.type === 'Engineer') {
          const engineer = new Engineer(answers.empName, answers.empId, answers.empEmail, answers.empGithub)
          team.push(engineer)
        } 
        if (answers.type === 'Intern') {
          const intern = new Intern(answers.empName, answers.empId, answers.empEmail, answers.empSchool)
          team.push(intern)
        }
        if (answers.addNew) {
          addEmployee()
        } else {
          console.log(team)
        }
      })
    }
    questionsManager()
