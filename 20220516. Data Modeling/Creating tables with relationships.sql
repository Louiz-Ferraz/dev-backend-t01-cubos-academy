DROP TABLE IF EXISTS comentarios;
DROP TABLE IF EXISTS postagens;
DROP TABLE IF EXISTS usuarios;

-- 3 tabelas:

-- usuários
-- postagens
-- comentários

CREATE TABLE usuarios (
  username TEXT NOT NULL PRIMARY KEY,
  nome TEXT NOT NULL,
  data_de_nascimento DATE
);

CREATE TABLE postagens (
  id UUID NOT NULL PRIMARY KEY,
  datahora_de_criacao TIMESTAMP NOT NULL,
  conteudo TEXT NOT NULL,
  autor TEXT NOT NULL REFERENCES usuarios(username)
);

CREATE TABLE comentarios (
  id UUID NOT NULL PRIMARY KEY,
  datahora_de_criacao TIMESTAMP NOT NULL,
  datahora_de_edicao TIMESTAMP,
  conteudo TEXT NOT NULL,
  autor TEXT NOT NULL REFERENCES usuarios(username),
  id_postagem UUID NOT NULL REFERENCES postagens(id)
);

INSERT INTO usuarios VALUES (
  '@luiz',
  'Luiz',
  NULL
);

INSERT INTO postagens VALUES (
  'ddcedbae-82de-433e-b0e4-a67b6d7e9998',
  NOW(),
  'Bom dia, grupo',
  '@luiz'
);