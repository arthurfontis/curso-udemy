const pessoa = {
    nome: "Rebeca",
    idade: 4,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/* Object.entries(pessoa).forEach(e=> {
    console.log(`${e[0]}: ${e[1]}}`)
}) */

Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false, //true mostra na keys
    writable: false, //se poderá alterar
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing - pega todos os atributos dos obj que passou, jogando dentro de um obj destino
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3 , a: 4} // vai ser sobreescrito o a, pois este a foi o ultimo a ser definido
const obj = Object.assign(dest, o1, o2) // concatenar objs em um só

Object.freeze(obj)
obj.c = 1234
console.log(obj) 