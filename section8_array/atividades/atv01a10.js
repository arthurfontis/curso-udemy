// 01
function cumprimentar(nome) {
    return console.log(`Olá, ${nome}!`)
}

cumprimentar('Rafael')
cumprimentar('Maria')

//02
console.log('----------------')
function saberIdade(idade) {
    return console.log(`Esta pessoa tem ${idade * 365} dias`)
}
saberIdade(1)
saberIdade(2)
saberIdade(10)
saberIdade(22)

//03
console.log('----------------')
function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 0.3
    return console.log(`Salário igual a R$ ${salarioLiquido}`)
}

calcularSalarioLiquido(120, 20)
calcularSalarioLiquido(180, 20)
calcularSalarioLiquido(180, 60)

//04
console.log('----------------')
function saberMes(mes) {
    switch (mes) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Mês incorreto')
    }
}
saberMes(2)
saberMes(7)
saberMes(4)
saberMes(9)
saberMes(11)
saberMes(16)

//05
console.log('----------------')
function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return console.log(false)
    }
    return console.log(primeiro >= segundo)
}
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)

//06
console.log('----------------')
function verificarValor(valor) {
    if (valor == true) {
        console.log(false)
    }
    else if (valor == false) {
        console.log(true)
    }
    else if (valor > 0) {
        console.log(-valor)
    }
    else if (valor < 0) {
        console.log(-valor)
    }
    else {
        return console.log(`Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`)
    }
}

verificarValor(2)
verificarValor(-5)
verificarValor(true)
verificarValor(false)
verificarValor(false)

//versão 06 mais facil
console.log('----------------')
function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return console.log(!valor)
    else if (tipo == "number") return console.log(-valor)
    else
        return console.log(`booleano ou número esperados, mas o parâmetro é ${tipo}`)
}

inverso(4)
inverso(true)
inverso(['ola'])

//07
console.log('----------------')
function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (numero > minimo && numero < maximo) {
        console.log(true)
    }
    else if (numero < minimo || numero > maximo) {
        console.log(false)
    }
    else if (inclusivo = true && numero >= minimo || numero <= maximo) {
        console.log(true)
    }
}

estaEntre(60, 50, 100)
estaEntre(10, 50, 100)
estaEntre(3, 3, 150)

//07 outro jeito
console.log('----------------')
function entre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(entre(10, 50, 100))
console.log(entre(3, 3, 150, true))

//08
console.log('----------------')
function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador - 1)
}

console.log(multiplicar(8, 2))

//09
console.log('----------------')
function retornar(elemento, qtndRepetir){
    let result = []
    for(let i = 0; i < qtndRepetir; i++){
        result.push(elemento)
    }
    return console.log(result)
}

retornar('Olá Mundo' , 10)

//10
console.log('----------------')
function maisSimbolo(numero){
    let resultado = ''
    for(let i = 0; i < numero; i++){
        resultado += '+'
    }
    return console.log(resultado)
}
maisSimbolo(5)