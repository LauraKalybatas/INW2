const  leia = require("prompt-sync")()

//só os números ímpares
//total desses números

let numero
let total = 0

numero = parseInt(leia("Digite um número inteiro positivo: "))

for(let x=1; x<=numero; x++){
    if((x%2)==1){
        console.log(x)
        total = total + x
    }  
}
console.log("Total: "+total)
