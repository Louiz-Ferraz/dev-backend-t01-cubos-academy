-- CREATE DATABASE mini_insta;

DROP TABLE IF EXISTS postagem_curtidas;
DROP TABLE IF EXISTS postagem_comentarios;
DROP TABLE IF EXISTS postagem_fotos;
DROP TABLE IF EXISTS postagens;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
  	nome TEXT,
  	image TEXT,
  	username TEXT NOT NULL UNIQUE,
  	email TEXT UNIQUE,
  	site TEXT,
  	bio TEXT,
  	telefone TEXT,
  	genero TEXT,
  	senha TEXT NOT NULL,
  	verificado BOOLEAN DEFAULT FALSE
);

CREATE TABLE postagens (
  	id SERIAL PRIMARY KEY,
  	usuario_id INT NOT NULL,
  	data TIMESTAMPTZ DEFAULT NOW(),
  	texto TEXT,
  	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE postagem_fotos (
  	id SERIAL PRIMARY KEY,
  	postagem_id INT NOT NULL,
  	imagem TEXT NOT NULL,
  	FOREIGN KEY (postagem_id) REFERENCES postagens (id)
);

CREATE TABLE postagem_comentarios (
  	id SERIAL PRIMARY KEY,
  	postagem_id INT NOT NULL,
  	usuario_id INT NOT NULL,
  	texto TEXT NOT NULL,
  	data TIMESTAMPTZ DEFAULT NOW(),
  	FOREIGN KEY (postagem_id) REFERENCES postagens (id),
  	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE postagem_curtidas (
  	postagem_id INT NOT NULL,
  	usuario_id INT NOT NULL,
  	data TIMESTAMPTZ DEFAULT NOW(),
	FOREIGN KEY (postagem_id) REFERENCES postagens (id),
  	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);