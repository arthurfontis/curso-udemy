const nome = 'Rebeca';
const contatenacao = 'Olá ' + nome + '!';
const template = `
Olá
${nome}!`
console.log(contatenacao, template); // ele considera as quebras de linha

//expressoes...
console.log(`1 + 1 = ${1+1}`); // ele só reconhe com sifrão e chaves

const up = texto => texto.toUpperCase() // deixar todas maiusculas
console.log(`Ei... ${up('cuidado')} !`) 
