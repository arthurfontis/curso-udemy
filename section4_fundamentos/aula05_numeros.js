const peso1 = 1.0;
const peso2 = Number('2.0'); //Number(com N maiúsculo é função)

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.876;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 *peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)); // funções usadas apartir do (.)
console.log(media.toString(2)); //binário
console.log(typeof media)