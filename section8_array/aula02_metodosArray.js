const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //add no ultimo
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //add no primeiro
console.log(pilotos)

//splice pode add e remover

//add
pilotos.splice(2, 0, 'Bottas', "Massa")
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array apartir de x indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //indice 1 até o 4, só que o 4 não é add
console.log(algunsPilotos2)
