const escola = "Cod3r";

console.log(escola.charAt(4)); //começa no 0, ou seja, o C é o 0
console.log(escola.charAt(5)); //voltou nulo
console.log(escola.charCodeAt(3)); //o valor referente a tebela unicode, o código dele
console.log(escola.indexOf('o')); // a ordem dele na palavra
console.log(escola.substring(1)); //começa no indice 1 até o final
console.log(escola.substring(0 , 3)); //do 0 até o 3, tirando o proprio indice 3

console.log('Escola '.concat(escola).concat ("!"));  // pode substituir o concat pelo (+)
console.log(escola.replace (3, 'e')); //substituir algo da let/const
console.log('Ana,Maria,Pedro'.split(',')); // separou 3 elementos independentes
