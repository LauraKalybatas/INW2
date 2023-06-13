//recebe o número do usuario entre 5 e 9
//multiplica o num por 3 (ate ser >=100)
//acima de 100 o programa para

const leia = require("prompt-sync")()

//variaveis
let numero = 0

//entradas
numero = parseInt(leia("Digite um número entre 5 a 9: "))

console.log(numero)
if(numero<5){
    console.log("Seu numero precisa ser maior!")
}
else if(numero>9){
    console.log("Seu numero precisa ser menor!")
}
else{
    while(numero<=100){
        numero = numero * 3
        console.log(numero)
    }
    
}

/* 
do{
    numero = numero * 3
    console.log(numero)
}while(numero<=100)
*/

