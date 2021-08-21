const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/generateHTML')

const teamMembersArray = []

const createManager = () => {
    console.log('Please answer the following questions to build your team profile.')
    return inquirer.prompt([
        {
            name: 'name',
            message: 'Who is managing this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter the Manager name to continue.')
                    return false
                }
            }
        },
        {
            name: 'id',
            message: 'What is the id number for the manager?',
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log('id must be a number, please enter to continue.')
                    return false
                } else {
                    return true
                }
            }
        },
        {
            name: 'email',
            message: 'What is the managers email?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('You must enter the Managers email to continue.')
                    return false
                }
            }
        },
        {
            name: 'officeNumber',
            message: 'What is the managers office number?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Office number must be a number, please enter to continue.')
                    return false
                } else {
                    return true
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput
        const manager = new Manager(name, id, email, officeNumber)
        teamMembersArray.push(manager)
        console.log(manager)
        console.log('Manager successfully stored.')
    })
}

createManager()