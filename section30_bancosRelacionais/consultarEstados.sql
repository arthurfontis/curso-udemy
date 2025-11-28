SELECT * FROM estados

select nome, sigla from estados

select sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

select nome, regiao, populacao as 'População(em milhões)' from estados
where populacao >= 10
order by populacao desc