var i = 1
var j = 0;
var resultado = ' ';

for(i; i<=10; i++){
    resultado += i + ' ';
    console.log(`${resultado}`)
    if(i = 10){
        for(i; i>1; i--){
            resultado -= i + ' ';
            console.log(`${resultado}`)
        }
}
}