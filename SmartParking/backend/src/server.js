
const project = require('../package.json');
const { testConnection } = require("./config/sql_connection")
const http = require('http');
const app = require("./app").app;

server()

async function server(){
    const port = 3000;
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port, () => {
        console.clear();
        console.log(`\n=============================================`);
        console.log(`Projeto: ${project.name}`);
        console.log(`Release: ${project.version}`);
        console.log(`Porta: ${port}`);
        testConnection()
        console.log(`=============================================\n`);
    });
}