//11
console.log('-------------------------')
function bissexto(ano) {
    if (ano < 0) {
        return false
    }
    else if ((ano % 400) === 0) {
        return true
    }
    else if ((ano % 100) === 0) {
        return false
    }
    else if ((ano % 4 === 0)) {
        return true
    }
    else {
        return false
    }
}
console.log(bissexto(2014))
console.log(bissexto(2000))
console.log(bissexto(2004))
console.log(bissexto(2005))
console.log(bissexto(2020))
console.log(bissexto(2021))

//12
console.log('-------------------------')
function fat(n1) {
    if (n1 === 0) {
        return 1
    } else {
        return n1 * fat(n1 - 1)
    }
}
console.log(fat(10))

//13
console.log('-------------------------')
function util(dia) {
    switch (dia) {
        case 1:
        case 7:
            console.log(`Estamos no final de semana`)
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Estamos em dia útil`)
            break
        default:
            console.log(`Dia inválido`)
    }
}
util(1)
util(2)
util(3)
util(4)
util(5)
util(6)
util(7)
util(8)

//14
console.log('-------------------------')
function vendarFrutas(frutas) {
    switch (frutas) {
        case 'maçã':
            console.log(`Não vendemos esta fruta aqui`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de kiwis`)
            break
        case 'melancia':
            console.log(`Aqui está, são 3 reais o kilo`)
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}
vendarFrutas('maçã')
vendarFrutas('kiwi')
vendarFrutas('melancia')
vendarFrutas('mamão')

//15
console.log('-------------------------')
function revenda(carro) {
    switch (carro) {
        case 'hatch':
            console.log(`Compra efetuada com sucesso`)
            break
        case 'caminhonete':
        case 'motocicleta':
        case 'sedan':
            console.log(`Tem certeza que não prefere este modelo?`)
            break
        default:
            console.log(`Não trabalhamos com este tipo de automóvel aqui`)
    }
}
revenda('hatch')
revenda('caminhonete')
revenda('motocicleta')
revenda('sedan')
revenda('suv')

//16
console.log('-------------------------')
function operacoes(x, y, operacao) {
    switch (operacao) {
        case 'soma':
            return x + y
            break
        case 'subtração':
            return x - y
            break
        case 'multiplicação':
            return x * y
            break
        case 'divisão':
            return x / y
            break
        default:
            return ('Operação inválida no sistema')
            break
    }

}
console.log(operacoes(10, 5, 'soma'))
console.log(operacoes(10, 5, 'subtração'))
console.log(operacoes(10, 5, 'multiplicação'))
console.log(operacoes(10, 5, 'divisão'))
console.log(operacoes(10, 5, 'log'))

//17
console.log('-------------------------')
function aumentoSalarial(plano, salarioAtual) {
    switch (plano) {
        case 'A' || 'a':
            return `Seu novo salário é ${salarioAtual + (salarioAtual * 0.10)}`
            break
        case 'B' || 'b':
            return `Seu novo salário é ${salarioAtual + (salarioAtual * 0.15)}`
            break
        case 'C' || 'c':
            return `Seu novo salário é ${salarioAtual + (salarioAtual * 0.20)}`
            break
        default:
            return `Este plano não está disponível`
    }
}
console.log(aumentoSalarial('A', 500))
console.log(aumentoSalarial('B', 500))
console.log(aumentoSalarial('C', 500))
console.log(aumentoSalarial('d', 500))

//18
console.log('-------------------------')
function lerNumero(numero) {
    switch (numero) {
        case 0:
            return 'zero'
            break
        case 1:
            return 'um'
            break
        case 2:
            return 'dois'
            break
        case 3:
            return 'três'
            break
        case 4:
            return 'quatro'
            break
        case 5:
            return 'cinco'
            break
        case 6:
            return 'seis'
            break
        case 7:
            return 'sete'
            break
        case 8:
            return 'oito'
            break
        case 9:
            return 'nove'
            break
        case 10:
            return 'dez'
            break
        default:
            return 'Número fora do intervalo'
    }
}
console.log(lerNumero(0))
console.log(lerNumero(1))
console.log(lerNumero(2))
console.log(lerNumero(3))
console.log(lerNumero(4))
console.log(lerNumero(5))
console.log(lerNumero(6))
console.log(lerNumero(7))
console.log(lerNumero(8))
console.log(lerNumero(9))
console.log(lerNumero(10))
console.log(lerNumero(11))

//19
console.log('-------------------------')
function lanchonete(pedido, quantidade) {
    const cq = 3.00
    const hs = 4.00
    const cb = 5.50
    const ba = 7.50
    const ref = 3.50
    const suc = 2.80


    switch (pedido) {
        case 'cachorro quente':
            console.log(`Ficará o total de R$ ${cq * quantidade} por ${quantidade} unidades deste item`)
            break

        case 'hambúrguer':
            console.log(`Ficará o total de R$ ${hs * quantidade} por ${quantidade} unidades deste item`)
            break

        case 'cheeseburguer':
            console.log(`Ficará o total de R$ ${cb * quantidade} por ${quantidade} unidades deste item`)
            break

        case 'bauru':
            console.log(`Ficará o total de R$ ${ba * quantidade} por ${quantidade} unidades deste item`)
            break

        case 'refrigerante':
            console.log(`Ficará o total de R$ ${ref * quantidade} por ${quantidade} unidades deste item`)
            break

        case 'suco':
            console.log(`Ficará o total de R$ ${suc * quantidade} por ${quantidade} unidades deste item`)
            break
        default:
            console.log('Produto não existente')
    }
}
lanchonete('cachorro quente', 2)
lanchonete('hambúrguer', 2)
lanchonete('cheeseburguer', 2)
lanchonete('bauru', 2)
lanchonete('refrigerante', 2)
lanchonete('suco', 2)

