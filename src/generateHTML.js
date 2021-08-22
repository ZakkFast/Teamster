const createManagerHtml = function(manager){
    return `
    <div class='col-4 mt-3>
        <div class='card h-100'>
            <div class ="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office: ${manager.office}</p>
            </div>
        </div>
    </div>
    `
}
const createEngineerHtml = function(engineer){
    return `
    <div class='col-4 mt-3>
        <div class='card h-100'>
            <div class ="card-header">
                <h2>${engineer.name}</h2>
                <h3>engineer</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${engineer.id}</p>
                <p>Email: ${engineer.email}</p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `
}
const createInternHtml = function(intern){
    return `
    <div class='col-4 mt-3>
        <div class='card h-100'>
            <div class ="card-header">
                <h2>${intern.name}</h2>
                <h3>intern</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${intern.id}</p>
                <p>Email: ${intern.email}</p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}
generateHtml = (data) =>{
    cardArray = []

    for(i = 0; i < data.length; i++){
        const employee = data[i]
        const role = employee.getRole()
        if (role === 'Manager'){
            const managerCard = createManagerHtml(employee)
            cardArray.push(managerCard)
        }
        if(role === 'Intern'){
            const internCard = createInternHtml(employee)
            cardArray.push(internCard)
        }
        if(role === 'Engineer'){
            const engineerCard = createEngineerHtml(employee)
            cardArray.push(engineerCard)
        }
    }
    const allCards = pageArray.join('')
    const createTeam = createTeamComplete(allCards)
    return createTeam
}