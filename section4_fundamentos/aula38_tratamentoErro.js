function tratarErroLancar(erro){
    //throw new Error ('Ocorreu um erro, tente novamente mais tarde')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('final')
    }
}
const obj = { nome: 'Roberto' } //alterando para o name, muda certo
imprimirNomeGritado(obj)