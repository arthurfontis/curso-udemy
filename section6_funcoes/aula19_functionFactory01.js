//factory simples
function criarPessoa(){ // factory é uma função que retorna um objt
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())