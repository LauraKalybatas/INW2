/* 
    programa que solicita o nome e o ano de nascimento da pessoa
    ano referência: 2023

    se a idade for menor que 3 anos escrever - não atendemos bebes
    
    se a idade for maior que 3 e menor que 13 escrever - [NOME] - faixa infantil

    se a idade for maior que 13 e menor que 17 escrever - [NOME] - faixa adolescente

    se a idade for maior que 17 e menor que 65 escrever - [NOME] - faixa adulto

    se a idade for maior que 65 escrever - não atendemos idosos
*/

const  leia = require("prompt-sync")()

//VARIAVEIS
let nome
let dataNascimento
let idade

//ENTRADAS
nome = leia("Digite o nome: ")
dataNascimento = parseInt(leia("Digite a data de nascimento: "))
idade = 2023 - dataNascimento

if(idade<=3){
    console.log("não atendemos bebes! ratitomanocu rapa")
}
else if(idade>3 && idade<=13){
    console.log(nome+" faixa infantil")
}
else if(idade>13 && idade<=17){
    console.log(nome+" faixa adolescente")
}
else if(idade>17 && idade<=65){
    console.log(nome+" faixa adulto")
}
else{
    console.log("nao atendemos idosos, veio safado")
}

//FINALE
console.log("El finale o_O")