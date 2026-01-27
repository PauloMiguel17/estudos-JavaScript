let amigo = {nome: 'miguelo', 
sexo: 'M', 
peso: 80, 
engordar(p){
    console.log('engordou');
    this.peso += p;
}
};

amigo.engordar(2);

console.log(`${amigo.nome} pesa ${amigo.peso} kg`);