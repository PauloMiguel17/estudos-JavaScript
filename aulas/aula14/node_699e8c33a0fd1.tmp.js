var i = 1
var j = 0;
var resultado = ' ';

for(i; i<=10; i++){
    resultado += i + ' ';
    console.log(`${resultado}`)
    for(i; i>1; i--){
        resultado -= i + ' ';
        console.log(`${resultado}`)
    }
}