const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor = 'Local'
    minhaFuncao() //vai ser chamado o global, pois foi declarada antes, ela só foi chamada aqui
}
exec()