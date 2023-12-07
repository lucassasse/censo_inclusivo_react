const mysql = require('mysql2/promise');
const databaseConfig = require('../config/database')

async function CreateTableUser() {
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query(`USE ${databaseConfig.database}`);
		await connection.query(`
			CREATE TABLE IF NOT EXISTS user (
				id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
				name VARCHAR(255) NOT NULL,
				social_name VARCHAR(255),
				cpf VARCHAR(14) NOT NULL UNIQUE,
				gender VARCHAR(15) NOT NULL,
				birthdate DATE NOT NULL,
				cep VARCHAR(9),
				number INT NOT NULL,
				complement VARCHAR(255) NOT NULL
			);
        `)
		await connection.end();
		console.log('Tabela criada!!!');
	} catch (error) {
		console.log('Error creating tabel user: ', error);
	}
}

CreateTableUser();