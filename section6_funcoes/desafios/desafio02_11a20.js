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
function vendarFrutas(frutas){
    switch(frutas){
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
function revenda (carro){
    switch(carro){
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