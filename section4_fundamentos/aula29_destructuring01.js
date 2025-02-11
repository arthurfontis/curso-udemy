const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 264
    }
}

const {nome, idade} = pessoa //a chaves é o operador = tire do obj a variavel nome e idade, de que obj? 'pessoa'
console.log(nome, idade)

const { nome: n, idade: i} = pessoa /*tire o atributo nome e o idade e crie variáveis com (n), e (i) */

console.log(n, i)

const { sobrenome = "a pessoa não informou o sobrenome,", bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const{ endereco: {logradouro, numero, cep}} = pessoa // não vai extrair endereco e sim o que está dentro dele
console.log(logradouro+ ',' + numero, + ',' +cep)

//const {conta: {ag, num }} = pessoa ERRO, o caminho do dado tem que estar correto