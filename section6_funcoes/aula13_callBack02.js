const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//com callBack
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)

//meu teste
const penalidadesProvaDetran = [
    3,2,1,2,2,3,4,5,8,1,2,0
]
const criterio = notaDetran => notaDetran <= 3
const aptos = penalidadesProvaDetran.filter(criterio)
console.log(aptos)
