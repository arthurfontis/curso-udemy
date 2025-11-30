update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = "MA"

update `estados`
set nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR'

SELECT nome, populacao from estados WHERE sigla = "PR"