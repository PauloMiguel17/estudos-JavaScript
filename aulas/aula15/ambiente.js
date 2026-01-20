let num = [10, 5, 9, 11];
console.log(`nosso vetor é o ${num} \n`);

//adicionar um valor ao vetor de forma manual
num[4] = 15;
console.log(`adicionando o numero 15 na posição 4 do vetor de forma manual (num[4] = 15) ${num} \n`);

// de forma mais facil podemos usar a funçao push, adiciona no final 
num.push(7);
console.log(`adicionando um valor no final do array usando (num.push(7)) ${num} \n`);

//funçao para saber quantas posições tem o vetor
console.log(`o vetor tem ${num.length} posiçoes (usando num.length) \n`);

//função para ordenar valores do array
num.sort((a, b) => a - b);
console.log(`vetor ordenado ${num} \n`);

console.log('elementos do vetor mostrados individualmente com repetição \n');

for(let i = 0; i< num.length; i++){
    console.log(`${num[i]}`)
}