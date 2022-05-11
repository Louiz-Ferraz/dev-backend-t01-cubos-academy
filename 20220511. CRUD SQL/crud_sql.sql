DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
  	id serial,
   	nome varchar(60) NOT NULL,
  	descricao text,
  	preco integer NOT NULL,
  	categoria varchar(20) NOT NULL,
  	estoque integer NOT NULL,
  	ativo boolean DEFAULT TRUE,
  	data_cadastro timestamptz  NOT NULL
);

INSERT INTO produtos
(nome, descricao, preco, categoria, estoque, data_cadastro)
VALUES
('Camisa verde', 'Camisa linda na cor verde', 4990, 'Camisa', 23, '2022-05-11 20:08:30-03'),
('Camisa azul', NULL, 4390, 'Camisa', 15, '2022-05-11 19:08:30-03'),
('Camisa preta', 'Camisa de luxo', 7990, 'Camisa de luxo', 5, '2022-05-08 15:08:30-03');

ALTER TABLE produtos
ALTER COLUMN data_cadastro
SET DEFAULT NOW();

INSERT INTO produtos
(nome, descricao, preco, categoria, estoque)
VALUES
('Camisa amarela', NULL, 4990, 'Camisa', 23);

ALTER TABLE produtos
DROP COLUMN descricao;

ALTER TABLE produtos
ADD COLUMN descricao text;

ALTER TABLE produtos
RENAME COLUMN preco TO valor;

UPDATE produtos
SET nome = 'Camisa laranja'
WHERE id = 4;

UPDATE produtos
SET ativo = false, categoria = 'Camisa'
WHERE id = 3;

DELETE FROM produtos
WHERE id = 3;

INSERT INTO produtos
(nome, descricao, valor, categoria, estoque)
VALUES
('Camisa laranja', NULL, 4990, 'Camisa', 23);

DELETE FROM produtos
WHERE id = 5;

ALTER TABLE produtos
ADD UNIQUE(nome);

ALTER TABLE produtos
DROP CONSTRAINT produtos_nome_key;

ALTER TABLE produtos
ADD CONSTRAINT nomeproduto UNIQUE(nome);

ALTER TABLE produtos
DROP CONSTRAINT nomeproduto;

INSERT INTO produtos
(nome, descricao, valor, categoria, estoque)
VALUES
('Camisa laranja', NULL, 4990, 'Camisa', 23);