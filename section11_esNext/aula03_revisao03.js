//ES8: Object.values/Object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal

const nome = "Carla"
const pessoa = {
    nome,
    ola(){
        return `Seja bem vindo(A) ${nome}`
    }
}

console.log(pessoa.nome + '\n' + pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())