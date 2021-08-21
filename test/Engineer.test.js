const { TestWatcher } = require('jest')
const Engineer = require('../lib/Engineer')

test('Testing for Engineer "Github"', ()=>{
    const engineer = new Engineer('Jimmy Page', 83, 'jimmypage@no.com', 'jimmyPage')
    expect(engineer.getGithub()).toBe('jimmyPage')
})
test('Testing for Engineer Role', ()=>{
    const engineer = new Engineer('Jimmy Page', 83, 'jimmypage@no.com', 'jimmyPage')
    expect(engineer.getRole()).toBe('Engineer')
})