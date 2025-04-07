const lodash = require('lodash')

function teste(min, max, numerosProibidos) {
    return new Promise((resolve, reject) => {
        const aleatorio = lodash.random(min, max)
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await teste(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if(tentativas > 5){
            throw "Não deu certo!"
        } else{
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)