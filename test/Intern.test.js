const Intern = require('../lib/Intern')

test('Testing for Intern School', ()=>{
    const intern = new Intern('John Paul Jones', 45, 'johnpauljones@no.com', 'WSU')
    expect(intern.getSchool()).toBe('WSU')
})
test('Testing for Intern Role', ()=>{
    const intern = new Intern('John Paul Jones', 45, 'johnpauljones@no.com', 'WSU')
    expect(intern.getRole()).toBe('Intern')
})