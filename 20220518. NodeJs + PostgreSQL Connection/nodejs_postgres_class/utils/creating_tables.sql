DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS autores;

CREATE TABLE autores (
	id SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL,
  	idade SMALLINT
);

CREATE TABLE livros (
	id SERIAL PRIMARY KEY,
  	autor_id INTEGER NOT NULL,
  	nome TEXT NOT NULL,
  	editora VARCHAR(100),
  	genero VARCHAR(50) NOT NULL,
  	data_publicacao DATE,
  	FOREIGN KEY (autor_id) REFERENCES autores (id)
);

INSERT INTO autores
(nome, idade)
VALUES
('Luiz', 26),
('Maria', 60);

INSERT INTO livros
(autor_id, nome, editora, genero, data_publicacao)
VALUES
(1, 'As aventuras de Pi', 'Intrínseca', 'Aventura', '2022-12-03'),
(2, 'Scooby-doo', 'Abagaral', 'Comédia', '2018-12-03');