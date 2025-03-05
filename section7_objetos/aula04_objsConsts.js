//pessoa -> endereço de memória -> {obj criado} 

const pessoa = {nome: 'joão'}
pessoa.nome ='Pedro' //atribuido n para pessoa, mas para pessoa.nome
console.log(pessoa)

// pessoa -> 456 ->{}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //não da mais para mexer no obj
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:"João"})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)