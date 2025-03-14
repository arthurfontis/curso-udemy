const clientes = [
    {nome:'Alberto' , plano: 'A' , nivelDeSatisfacao: 5 , clienteMaisdeUmAno: true},
    {nome:'Joana' , plano: 'C' , nivelDeSatisfacao: 3 , clienteMaisdeUmAno: false},
    {nome:'Mario' , plano: 'B' , nivelDeSatisfacao: 4 , clienteMaisdeUmAno: true},
    {nome:'Ana' , plano: 'A' , nivelDeSatisfacao: 1 , clienteMaisdeUmAno: false},
]

const nivelSatisfa = satisfacao => satisfacao.nivelDeSatisfacao >= 3
console.log(clientes.filter(nivelSatisfa))


const clienteSatisfeito = clientes.map(c => c.nivelDeSatisfacao)
const satisfeito = clienteSatisfeito.filter( i => i >= 3)

console.log(satisfeito.sort())

const maisAno = (resultado, atual) => resultado || atual
console.log(clientes.map(c => c.clienteMaisdeUmAno).reduce(maisAno))





