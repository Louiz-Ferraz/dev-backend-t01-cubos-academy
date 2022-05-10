SELECT
	categoria,
    COUNT(*) quantidade,
    SUM(estoque) estoque_total
FROM farmacia
GROUP BY categoria
ORDER BY 3 DESC;