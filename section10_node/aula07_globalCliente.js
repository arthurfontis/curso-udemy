require('./aula07_global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'

console.log(MinhaApp.nome) // porque esta freeze no global
