//Object.preventExtensions - não pode add novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' //pode alterar, só não pode add
produto.descricao = 'Borracha Branca escolar'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana' , idade: 35}
Object.seal(pessoa) //não consegue add, nem excluir, mas pode modificar ainda
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes, não pode nem modificar