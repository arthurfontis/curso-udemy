const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const client={
    nome:'Pedro',
    idade: 32,
    peso: 78,
    endereco:{
        logradouro:'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(client)