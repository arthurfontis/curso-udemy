function aleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log('Você só sairá deste código, somente quando acertar quantas vidas tem um gato: ')
let opcao = 7
do {
    opcao = aleatorio(-1, 10)
    console.log('O número gerado é... '+(opcao))
} while (opcao != 7)
console.log('Final')