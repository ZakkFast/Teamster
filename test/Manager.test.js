const { TestWatcher } = require('jest')
const Manager = require('../lib/Manager')

test('Testing for Managers office number', ()=>{
    const manager = new Manager('Robert Plant', 69, 'robertplant@no.com', 8)
    expect(manager.officeNumber).toBe(8)
})
test('Testing for Manager Role', ()=>{
    const manager = new Manager('Robert Plant', 69, 'robertplant@no.com', 8)
    expect(manager.getRole()).toBe('Manager')
})