const leia = require("prompt-sync")()

// leia o nome do usuario
// leia o salario do usuario
// se o salario for menor que 2500 a pessoa é isenta
// se o salario for acima de 2500 e menor ou igual que 5000
// paga imposto de 15% - mostra imposto e salario liquido
// se o salario for maior que 5000 paga imposto de 25%
// mostra salario liquido e imposto a pagar

// VARIAVEIS
let nomeUser 
let salarioUser
let valorImposto

//ENTRADAS
nomeUser = leia("Digite o nome de usuário: ")
salarioUser = parseFloat(leia("Digite o valor do salário do usuário: "))

if(salarioUser<=2500){
    console.log(nomeUser+" isento eres!:D")
}
else if(salarioUser > 2500 && salarioUser <= 5000){
    valorImposto = salarioUser * 0.15
    console.log("Ola senior "+nomeUser+" seu imposto é "+valorImposto)
    console.log("Seu salário liquido é "+(salarioUser-valorImposto))
}
else{
    valorImposto = salarioUser * 0.25
    console.log("Ola senior "+nomeUser+" seu imposto é "+valorImposto)
    console.log("Seu salário liquido é "+(salarioUser-valorImposto))
}

//FINALE
console.log("El finale o_O")
