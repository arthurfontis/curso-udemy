//20
console.log('-------------------------')
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) { // essa condição é para que ele continue sendo executado
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));

//21
console.log('-------------------------')
function planoSaude(idade) {
    if (idade < 10) {
        console.log('RS' + 180)
    } else if (idade >= 10 && idade <= 30) {
        console.log('R$' + 150)
    } else if (idade > 30 && idade <= 60) {
        console.log('R$' + 195)
    } else if (idade > 60 && idade <= 115) {
        console.log('R$' + 230)
    } else {
        console.log('Idade inválida')
    }

}
planoSaude(5)
planoSaude(22)
planoSaude(36)
planoSaude(55)
planoSaude(70)
planoSaude(120)

//22
console.log('-------------------------')
function calcularValor(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5 / 100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

//23
console.log('-------------------------')
function media(codigo, n1, n2, n3) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codigo}. Notas: ${n1}, ${n2}, ${n3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}
media(123, 2.8, 6, 3.5)

//24
console.log('-------------------------')
function helloWorld() {
    let i = 0
    while (i < 11) {
        console.log("Hello World");
        i++
    }
}

helloWorld()

//25
console.log('-------------------------')
function contador() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}
contador()

//26
console.log('-------------------------')
function pares() {
    for (let i = 1; i <= 100; i++) { // etapas: 1. declaração da var, 2. condição, 3. incremento
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
pares()

//27
console.log('-------------------------')
function criancas(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else {
            if (taxa2 >= taxa1) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(criancas(150, 2, 130, 4));
console.log(criancas(150, 6, 130, 4));

//28
console.log('-------------------------')
function paresImpares(vetorNumeros) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`${pares} números pares e ${impares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)

//29
console.log('-------------------------')
function intervalo(vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(intervalo(vetor))

//30
console.log('-------------------------')
function inter(vet) {
    let menor
    let maior
    for (let i = 0; i < vet.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vet[i]
            menor = vet[i]
        } else {
            if (vet[i] > maior) {
                maior = vet[i]
            }
            if (vet[i] < menor) {
                menor = vet[i]
            }
        }
    }
    return [menor, maior]
}
vet = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(inter(vet))
