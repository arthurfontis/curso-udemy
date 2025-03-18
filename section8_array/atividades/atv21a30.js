//21
function menorNumero(elements) {
    let menor = elements[0]
    for (let i in elements) {
        if (elements[i] < menor) {
            menor = elements[i]
        }
    }
    return menor
}

console.log(menorNumero([6, 2, 3, 4, 1, 6, 10, 2]))

//22
console.log('----------------')
function sorte(numero) {
    let aleatorio = Math.floor(Math.random() * 10) + 1
    let numeroInserido = numero

    if (aleatorio == numeroInserido) {
        return `Parabens, o número sorteado foi o ${aleatorio}`
    }
    else {
        return `Que pena, o número sorteado foi o ${aleatorio}`
    }
}

console.log(sorte(1))
console.log(sorte(2))
console.log(sorte(3))
console.log(sorte(4))

//23
console.log('----------------')
function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return console.log(palavras.length)
}
contarPalavras('Olá, meu nome é Arthur')
contarPalavras('Eu sou uma frase')

//24
console.log('----------------')
function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log(contarCaractere('a', 'A sorte favorece os audazes'))

//25
console.log('----------------')
function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}
console.log(buscarPalavrasSemelhantes('pro', ["programação", "mobile", "profissional"]))

//26
console.log('----------------')
function removerVogais(frases) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frases = frases.replace(vogal, ''))
    return frases
}

console.log(removerVogais("Ola Mundo"))

//27
console.log('----------------')
function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}

//28
console.log('----------------')
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []
    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length
        if (quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([2, 1, 54, 12, 62, 322, 111], 2))

//29
console.log('----------------')
function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))

//30
console.log('----------------')
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante({
    Joao: [8,7.6,8.9,6],
    Mariana: [9, 6.6, 7.9 ,8],
    Carla: [7,7,8,9]
}))