let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!! ' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!('' || null || 0 || '' || 123));

let nome = 'Fontis'; //se ficar sem nome ele vai colocar o desconhecido, caso não seja valido
console.log(nome || 'Desconhecido');
