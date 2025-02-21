const pessoa = {
    saudacao: 'Bom Dia!',
    msg:'Olá',
    falar(){
        console.log(this.saudacao)
    },
    ler(){
        console.log(this.msg)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientada a obj
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//
pessoa.ler()
const ler = pessoa.ler
ler()
const lerEBom = pessoa.ler.bind(pessoa) //ela n foi alterada, somente o resultado da exec bind foi armazenada em outra var
lerEBom()