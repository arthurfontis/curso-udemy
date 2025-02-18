let contador = 1
while(contador <= 10){
    console.log('Contador: ' + (contador))
    contador++
}
console.log('-----------------')
for(let i= 1; i <=10; i ++){
    console.log('I= ' + (i))

}

const notas = [6.7, 7.4, 9.3, 8.1, 7.1]
for(i=0; i < notas.length; i++)
    console.log('Notas: ' + (notas[i]))

console.log('----------------')
function vidaGame(){
    for(let life = 10; life >= 0; --life)
        console.log('Sua vida: ' + (life))
    {
        console.log('Morreu... :[')
    }
    
}
vidaGame()

console.log('---------')
function renasceu(){
    for( let regeneracao = 0; regeneracao <= 10; regeneracao++ )
        console.log('Sua vida: ' + (regeneracao))
    {
        console.log('Sua vida se regenerou por completo. :]')
    }
}
renasceu()
