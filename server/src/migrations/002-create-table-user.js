const mysql = require('mysql2/promise');
const databaseConfig = require('../config/database')

async function CreateTableUser() {
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query(`USE ${databaseConfig.database}`);
		await connection.query(`
            CREATE TABLE IF NOT EXISTS user (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                cpf VARCHAR(14) NOT NULL UNIQUE,
				name VARCHAR(255) NOT NULL,
				surname VARCHAR(255) NOT NULL,
				birthdate VARCHAR(255) NOT NULL,
				email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `)
		await connection.end();
		console.log('Tabela criada!!!');
	} catch (error) {
		console.log('Error creating tabel user: ', error);
	}
}

CreateTableUser();