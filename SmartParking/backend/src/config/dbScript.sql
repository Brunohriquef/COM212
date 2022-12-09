CREATE TABLE usuarios(
	id_usuario integer PRIMARY KEY,
	nome varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	cpf varchar(11) UNIQUE NOT NULL,
	endereco varchar(200),
	telefone varchar(13) NOT NULL,
	senha varchar(300)
);

CREATE TABLE zonas(
	id_zona integer PRIMARY KEY, 
	cep varchar(8) NOT NULL,
);

CREATE TABLE vagas(
	id_vaga integer PRIMARY KEY,
	id_zona integer NOT NULL, 
	cep varchar(8) NOT NULL,
	status boolean NOT NULL DEFAULT false,
	FOREIGN KEY (id_zona) references zonas(id_zona)
);

CREATE TABLE historico_reservas(
	id_reserva integer PRIMARY KEY,
	id_vaga integer NOT NULL,
	id_usuario integer NOT NULL,
	duracao long NOT NULL,
	placa varchar(8) NOT NULL,
	status boolean NOT NULL,
	FOREIGN KEY (id_vaga) references vagas(id_vaga)
	FOREIGN KEY (id_usuario) references usuarios(id_usuario)
);

CREATE TABLE agentes(
	id_agente integer PRIMARY KEY,
	nome varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	cpf varchar(11) UNIQUE NOT NULL,
	endereco varchar(200),
	telefone varchar(13) NOT NULL,
	senha varchar(300)
);

CREATE TABLE alocacao_agentes(
	id_agente integer NOT NULL,
	id_zona integer NOT NULL,
	PRIMARY KEY (id_agente, id_zona),
	FOREIGN KEY (id_agente) references agentes(id_agente),
	FOREIGN KEY (id_zona) references zonas(id_zona)
); 

CREATE TABLE pagamentos(
	id_pagamento integer PRIMARY KEY
	id_usuario NOT NULL,
	tipo_pagamento varchar(20) NOT NULL,
	nro_cartao varchar(16),
	cvv varchar(3),
	nome varchar(100) NOT NULL,
	chave_pix varchar(300),
	boleto varchar(300),
	FOREIGN KEY (id_usuario) references usuarios(id_usuario)
);
