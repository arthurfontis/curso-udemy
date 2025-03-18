//11
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return console.log([primeiroElemento, ultimoElemento])
}

receberPrimeiroEUltimoElemento([2, 6, 'ola', 3])
receberPrimeiroEUltimoElemento([2, 6, '1', 'teste'])

//12
console.log('----------------')
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = { ...objeto }
    delete copia[nomeDaPropriedade]
    return console.log(copia)
}
removerPropriedade({ a: 1, b: 2 }, "a")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao")

//13
console.log('----------------')
function filtrarNumber(array) {
    const justNumbers = array.filter(Number)
    return console.log(justNumbers)
}
filtrarNumber([2, 5, 'minecrafrs', 2, 1, 'yellow', 6])

//14
console.log('----------------')
function objetoParaArray(obj) {
    const resultado = []
    for (let chave in obj) {
        resultado.push([chave, obj[chave]])
    }

    return console.log(resultado)
}

objetoParaArray({
    nome: 'Agnus',
    idade: 6
})

//15
console.log('----------------')
function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([2, 2, 8, 4]))


//16
console.log('----------------')
function checarAnoBissexto(ano) {
    if (ano % 4 == 0 || ano % 400 == 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

checarAnoBissexto(2021)
checarAnoBissexto(2020)
checarAnoBissexto(2028)
checarAnoBissexto(2032)
checarAnoBissexto(2031)

//17
console.log('----------------')
function somarNumeros(numbers) {
    const soma = numbers.reduce((acumulador, numeroAtual) => acumulador + numeroAtual)
    return soma
}

console.log(somarNumeros([2, 3, 2]))
console.log(somarNumeros([2, 2, 2]))
console.log(somarNumeros([5, 5, 2]))

//18
console.log('----------------')
function despesasTotais(despesas) {
    return despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco , 0)
}

console.log(despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))

//19
console.log('----------------')
function mediaSimples(complementos){
    const soma = complementos.reduce((acumular, somou) => acumular + somou)
    return soma / complementos.length
}

console.log(mediaSimples([2,4,2,4]))

//20
console.log('----------------')
function calcularAreaTriangulo(base,altura){
    const area = (base * altura) /2
    return console.log(area.toFixed(2))
}

calcularAreaTriangulo(5,2)
calcularAreaTriangulo(6.2,4)
calcularAreaTriangulo(7,8)

