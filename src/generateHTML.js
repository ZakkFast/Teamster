const createManagerHtml = function(manager){
    return `
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
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
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
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
    <div class='col-4 mt-3'>
        <div class='card h-100'>
            <div class="card-header text-white bg-info">
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
    const allCards = cardArray.join('')
    const createTeam = createTeamComplete(allCards)
    return createTeam
}
const createTeamComplete = function(allCards){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <body class='bg-dark'>
        <header>
            <nav class="navbar bg-primary">
                <h1 class="text-center w-100">Meet the Team!</h1>
            </nav>
        </header>
        <main>
            <div class="container mt-4">
                <div class="row justify-content-center" id="team-cards">
                    ${allCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </html>
  `;
  }
  module.exports = generateHtml