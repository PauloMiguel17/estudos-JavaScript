let vetor = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < vetor.length; i++){
    console.log(`a posição ${i} tem o valor ${vetor[i]}`);
}
console.log('\n');


//versão mais atual e simples de demonstrar vetores
for(i in vetor){
    console.log(`a posição ${i} tem o valor ${vetor[i]}`);
}