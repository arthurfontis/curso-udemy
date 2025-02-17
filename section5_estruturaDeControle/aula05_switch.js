const imprimirResultado = function (nota) {
    switch (Math.ceil(nota)) {
        case 10: // pode deixar esse vazio, pois é a mesma coisa do caso 9
        case 9:
            console.log('Quadro de Honra')
            break // so saira do switch, com o break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
            default:
                console.log('Nota inválida')
    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


//teste que fiz para ver se eu tinha aprendido 

const estadoCivil = function (estados){
    switch (estados){
        case 'solteiro':
            console.log('Você é solteiro')
            break
        case 'casado':
            console.log('Você é casado')
            break
        case 'divorciado':
            console.log('Você é divorciado')
            break
        case 'viuvo':
            console.log('Você é viúvo')
            break
            default:
                console.log('Este estado civil não existe')
    }

}
estadoCivil('solteiro')
estadoCivil('casado')
estadoCivil('divorciado')
estadoCivil('viuvo')
estadoCivil('doido')