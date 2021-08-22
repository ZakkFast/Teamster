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
const createEmployee = () => {
    console.log('Please answer the following questions.')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is this employees role?',
            choices: ['Intern', 'Engineer']
        },
        {
            name: 'name',
            message: 'What is the Employee name?',
            validate: nameInput =>{
                if(nameInput){
                    return true
                } else {
                    console.log('You must enter a name to continue')
                    return false
                }
            }
        },
        {
            name: 'id',
            message: 'What is the Employees id number?',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log('You must enter a name to continue')
                    return false
                }
            }
        },
        {
            name: 'email',
            message: 'What is the employees email adress?',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else{
                    console.log('You must enter an email to continue')
                    return false
                }
            }
        },
        {
            name: 'school',
            message: 'What school does the intern attend?',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput){
                    return true
                } else {
                    console.log('You must enter the school to continue')
                }
            },   
        },
        {
            name: 'github',
            message: 'What is the Engineers GitHub username?',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log('You must enter the GitHub username to continue')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCreateEmployee',
            message: 'Are there more employess to add?',
            defualt: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmCreateEmployee} = employeeData
        let employee
        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github)
            console.log(employee)
        } else if(role === 'Intern'){
            employee = new Intern(name, id, email, school)
            console.log(employee)
        }
        teamMembersArray.push(employee)
        if(confirmCreateEmployee){
            return createEmployee(teamMembersArray)
        } else {
            return teamMembersArray
        }
    })
}

createManager()
    .then(createEmployee)