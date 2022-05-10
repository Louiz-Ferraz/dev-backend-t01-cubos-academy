SELECT *
FROM usuarios;

-- COUNT
SELECT COUNT(*)
FROM usuarios;

SELECT COUNT(*)
FROM usuarios
WHERE idade < 50;

SELECT COUNT(*)
FROM usuarios
WHERE telefone IS NULL;

SELECT COUNT(telefone) AS contagem
FROM usuarios
WHERE telefone IS NULL;

-- CONCAT
SELECT nome || ' - ' || email nome_email
FROM usuarios;

SELECT CONCAT(nome, ' - ', email) "nome e email"
FROM usuarios;

-- AVG
SELECT AVG(idade)
FROM usuarios;

-- ROUND
SELECT ROUND(AVG(idade), 2)
FROM usuarios;

-- MIN e MAX
SELECT idade
FROM usuarios
ORDER BY idade DESC LIMIT 1;

SELECT MAX(idade) idade_max
FROM usuarios;

SELECT MIN(cadastro) cadastro_min -- data
FROM usuarios;

SELECT MAX(nome) ultimo_nome -- string
FROM usuarios;

-- SUM
SELECT SUM(idade)
FROM usuarios;

-- CAST
SELECT '123'::int;

SELECT CAST('123' AS int);

SELECT 
	nome,
    CAST(cadastro AS timestamp)
FROM usuarios;

-- NOW
SELECT NOW();

SELECT *
FROM usuarios
WHERE CAST(cadastro AS timestamp) > NOW();

-- AGE
SELECT AGE('2022-05-09 14:05:00', '1995-08-03 12:00:00');

SELECT AGE(CAST('1995-08-03 18:01:00' AS timestamp));

SELECT *, AGE(CAST(cadastro AS timestamp)) tempo_cadastro
FROM usuarios;

-- COALESCE
SELECT id || ' - ' || nome || ' - ' || telefone
FROM usuarios
ORDER BY id;

SELECT id || ' - ' || nome || ' - ' || COALESCE(telefone, 'Não informado')
FROM usuarios
ORDER BY id;

-- GROUP BY
SELECT 
	idade,
    COUNT(*) quantidade
FROM usuarios
GROUP BY idade
ORDER BY idade;

SELECT 
	idade,
    COUNT(*) quantidade
FROM usuarios
WHERE idade = 19
GROUP BY idade;

SELECT
	CAST(cadastro AS date),
    COUNT(*)
FROM usuarios
GROUP BY 1
ORDER BY 2 DESC;
