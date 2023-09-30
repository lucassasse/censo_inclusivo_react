--MySQL

CREATE TABLE IF NOT EXISTS bairros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) COLLATE utf8mb4_general_ci,
    cidade_id INT,
    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);

CREATE TABLE IF NOT EXISTS cidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) COLLATE utf8mb4_general_ci,
    estados_id INT,
    FOREIGN KEY (estados_id) REFERENCES estados(id)
);

CREATE TABLE IF NOT EXISTS contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarios_id INT,
    telefone VARCHAR(20) COLLATE utf8mb4_general_ci,
    email VARCHAR(100) COLLATE utf8mb4_general_ci,
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS estados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) COLLATE utf8mb4_general_ci,
    uf VARCHAR(2) COLLATE utf8mb4_general_ci,
    ddd INT,
    pais_id INT NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES pais(id)
);

CREATE TABLE IF NOT EXISTS pais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) COLLATE utf8mb4_general_ci,
    sigla VARCHAR(2) COLLATE utf8mb4_general_ci
);

CREATE TABLE IF NOT EXISTS responsavel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) COLLATE utf8mb4_general_ci
);

CREATE TABLE IF NOT EXISTS ruas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) COLLATE utf8mb4_general_ci,
    cep VARCHAR(8) COLLATE utf8mb4_general_ci,
    bairro_id INT,
    FOREIGN KEY (bairro_id) REFERENCES bairros(id)
);

CREATE TABLE IF NOT EXISTS tipo_contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) COLLATE utf8mb4_general_ci,
    contatos_id INT,
    FOREIGN KEY (contatos_id) REFERENCES contatos(id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) COLLATE utf8mb4_general_ci,
    cpf CHAR(11) COLLATE utf8mb4_general_ci NOT NULL,
    data_nascimento DATE,
    sexo CHAR(1) COLLATE utf8mb4_general_ci,
    numero_casa VARCHAR(11) COLLATE utf8mb4_general_ci,
    nivel_acesso INT NOT NULL,
    status BOOLEAN NOT NULL,
    senha VARCHAR(255) COLLATE utf8mb4_general_ci,
    data_cadastro DATE NOT NULL,
    responsavel_id INT,
    ruas_id INT,
    FOREIGN KEY (responsavel_id) REFERENCES responsavel(id),
    FOREIGN KEY (ruas_id) REFERENCES ruas(id)
);
