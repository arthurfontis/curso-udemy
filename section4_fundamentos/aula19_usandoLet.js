var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //Let tem escopo em bloco, caso não exista, no escopo do bloco, vai usar para o anterior. escopos= funcao, global, bloco
}
console.log('fora =', numero)