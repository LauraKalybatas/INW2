const leia = require("prompt-sync")()

/*
O USUARIO VAI DIGITAR NUMEROS
1- MOSTRAR A SOMA DOS NUMEROS
2- MOSTRAR QUAL FOI O MAIOR NUMERO DIGITADO
3- MOSTRAR QUANTIDADE DE NUMEROS DIGITADOS
4- COLOCAR OS NUMEROS EM ORDEM DECRESCENTE
O USUARIO VAI DIGITAR UM NUMERO NEGATIVO, QUE NÃO SERÁ CONSIDERADO
*/

//VARIAVEIS
let num = 0
let total = 0
let maiorNum = 0
let contador = -1


//ENTRADAS
do{
    total = total + num
    if(num>maiorNum){
        maiorNum = num
    }
    contador++
    num = parseInt(leia("Digite um número: "))
}while(num>0)

//SAIDAS
console.log("Total: "+total)
console.log("Maior numero: "+maiorNum)
console.log("Quantidade de numeros: "+contador)




