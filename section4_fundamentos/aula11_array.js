// basicamente para add dados e organizar eles


const valores = [7.7 , 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10
console.log(valores);
console.log(valores.length);
valores.push({id: 3}, false, null, 'teste'); // add elementos novos na array
console.log(valores);

console.log(valores.pop());//tirar o último elemento da array
delete valores[0];
console.log(valores)
console.log(typeof valores) // em js array é object