const NumberPrompt = require('inquirer/lib/prompts/number')
const { TestWatcher } = require('jest')
const Employee = require('../lib/Employee')

test('Testing for creation of an Employee Object', ()=>{
    const employee = new Employee('John Bonham', 77, 'johnbonham@no.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})
test('Testing that name is returned correctly', ()=>{
    const employee = new Employee('John Bonham', 77, 'johnbonham@no.com')
    expect(employee.getName()).toEqual(expect.any(String))
})
test('Testing that ID is returned correctly', ()=>{
    const employee = new Employee('John Bonham', 77, 'johnbonham@no.com')
    expect(employee.getId()).toEqual(expect.any(Number))
})
test('Testing that email is returned correctly', ()=>{
    const employee = new Employee('John Bonham', 77, 'johnbonham@no.com')
    expect(employee.getEmail()).toEqual(expect.any(String))
})
test('Testing that assigned role is returned correctly', ()=>{
    const employee = new Employee('John Bonham', 77, 'johnbonham@no.com')
    expect(employee.getRole()).toEqual('Employee')
})