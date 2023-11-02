const mysql = require('mysql2/promise');
const databaseConfig = require('../config/database')

async function CreateTableUser() {
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query(`USE ${databaseConfig.database}`);
		await connection.query(`
			INSERT INTO user
				(
					cpf,
					name,
					surname,
					birthdate,
					email,
					password
				)
			VALUES
				(
					'123.456.789-01',
					'Joao',
					'Silva',
					'2000-01-01',
					'meu.email@email.com',
					'123456789'
				);
        `)
		await connection.end();
		console.log('Dados inseridos na tabela!!!');
	} catch (error) {
		console.log('Error creating tabel user: ', error);
	}
}

CreateTableUser();