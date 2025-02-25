//01
function operacoes(x, y) {
    const soma = x + y
    const subt = x - y
    const mult = x * y
    const divi = x / y
    return {
        soma,
        subt,
        divi,
        mult
    }
}
console.log(operacoes(10, 5))

//02
function triangulo(a, b, c) {
    if (a === b && b === c) {
        console.log('Este triângulo é equilátero')
    }
    else if (a === b || a === c || b === c) {
        console.log('Este triângulo é isósceles')
    }
    else {
        console.log('Este triângulo é escaleno')
    }
}
triangulo(3, 3, 3)
triangulo(3, 3, 5)
triangulo(5, 3, 5)
triangulo(3, 5, 5)
triangulo(3, 4, 5)

//03
function potencia(base, expo) {
    return Math.pow(base, expo)

}
console.log(potencia(5, 3))

//04
function div(dividendo, divisor) {
    const result = Math.floor(dividendo / divisor)
    const rest = Math.floor(dividendo % divisor)

    return `O resultado da divisão é : ${result} e o resto é ${rest}`
}
console.log(div(120, 9))

//05
function cash(x, y) {
    const somaCents = (x + y)
    return `R$ ${somaCents.toFixed(2)}`
}
console.log(cash(0.1, 0.2))

//06
function montante(inicial, taxaJ, temp) {
    const simple = inicial + (inicial * taxaJ * temp)
    return `R$ ${simple.toFixed(2)}`
}
console.log(montante(1000, 0.05, 12))

function composto(ini, tax, tempo) {
    const comp = ini * Math.pow((1 + tax), tempo)
    return `R$ ${comp.toFixed(2)}`
}
console.log(composto(1000, 0.05, 12))

//07
function bhaskara(ax2, bx, c) {
    let delta = bx ** 2 - 4 * ax2 * c
    if (delta < 0) {
        return 'Delta é negativo'
    }

    let raizDelta = Math.sqrt(delta)
    let x1 = Math.floor(-bx + raizDelta) / (2 * ax2)
    let x2 = Math.floor(-bx - raizDelta) / (2 * ax2)

    return [x1, x2]
}
console.log(bhaskara(4, 3, 2))
console.log(bhaskara(4, 12, 6))

//08
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))

