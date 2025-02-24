function nomePessoa(nome, idade){
    this.nome = nome
    this.idade = idade

    this.falar = function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}
const p1 = new nomePessoa('Graziele', 22)
p1.falar()