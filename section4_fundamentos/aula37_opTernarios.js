const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado' //primeira parte a condicao para verdade ou falso, após a interrogacao(operador) a segunda parte caso seja verdadeiro e após os dois pontos a terceira parte caso seja falso

console.log(resultado(7.1))
console.log(resultado(6.7))

const iNecessaria = idade => idade >=18 ? 'Acesso liberado' : 'Acesso recusado'
console.log('---------------------')
console.log(iNecessaria(17))
console.log(iNecessaria(19))
