const mysql = require('mysql2/promise');
const databaseConfig = require('../config/database')

async function CreateTableUser() {
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query(`USE ${databaseConfig.database}`);
		await connection.query(`
            DROP TABLE user;
        `)
		await connection.end();
		console.log('Tabela deletada!!!');
	} catch (error) {
		console.log('Error creating tabel user: ', error);
	}
}

CreateTableUser();