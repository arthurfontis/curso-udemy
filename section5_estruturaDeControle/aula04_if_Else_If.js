Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(5,6.99)){
        console.log('Foi quase')
    } else if(nota.entre(0.0, 4.99)){
        console.log('Quem sabe da próxima vez')
    } else{
        console.log('Nota inválida')
    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-2)
imprimirResultado(11)