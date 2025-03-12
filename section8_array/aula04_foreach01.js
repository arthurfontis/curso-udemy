const aprovados = ['Agatha', 'Tiago', 'Marcos', 'Raquel']
aprovados.sort()

aprovados.forEach(function (nome, indice, array) {

    /* por padrao o primeiro é o nome do trem e no segundo é o indice e terceiro array, mas pode suprimir, e não informar o indice nem array */

    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

console.log('---------------')

aprovados.forEach(nome => console.log(nome))

console.log('---------------')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)