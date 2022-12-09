const { Sequelize } = require('sequelize');

const database = 'smart_parking'
const username = 'postgres'
const password = 'admin'
const host = 'localhost'
const dialect = 'postgres'


exports.sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {
        host,
        dialect
    }
);

exports.testConnection = () => {
    console.log(`Database: ${host}/${database}`);
    try {
		this.sequelize.authenticate();
		console.log('\nConexão com o banco estabelecida com sucesso!');
	} catch (error) {
		console.error('Conexão com o banco recusada:\n', error);
	}
}