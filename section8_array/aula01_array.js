console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ["Bia", 'Carlos', 'Ana']
console.log(aprovados[0]) //indicies
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() // ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // primeiro - o elemento em questão, segundo- apartir do elemento selecionado vai remover a quantidade e as aspas dps para add / pode servir para add elementos entre os que já estão tmb
console.log(aprovados)