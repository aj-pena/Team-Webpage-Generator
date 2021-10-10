// Function to write the html content in a string
function generateSkelleton() {

    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">    
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
        <title>Team Roster</title>
    </head>
    <body>
        <div id="container">
            <header>
                <h1>Hello! This is our talented team</h1>
            </header>
            <main>
                
                
            </main>      
            <footer></footer>
        </div>    
    </body>
    </html>  
    `;
}

module.exports = generateSkelleton;