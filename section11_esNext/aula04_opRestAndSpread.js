// Operador ... rest(juntar) / Spread(espalhar)

//usar rest com parâmetro de função

//usar spread com objetos
const funcionario = {nome: 'Maria' , salario: 1234.56}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['João' , 'Pedro' , 'Glória']
const grupoFinal = ['Maria' , ...grupoA , 'Rafaela' ]
console.log(grupoFinal)