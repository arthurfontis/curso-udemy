const alunos = [
    {nome: 'João' , nota: 7.3 , bolsista: false},
    {nome: 'Maria' , nota: 9.2 , bolsista: true},
    {nome: 'Pedro' , nota: 9.8 , bolsista: false},
    {nome: 'Ana' , nota: 8.7 , bolsista: true}
]

console.log(alunos.map(a => a.nota))

console.log('-------------')
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)

console.log('-------------')

console.log(resultado)