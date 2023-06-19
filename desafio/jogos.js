const leia = require("prompt-sync")()

let aluno1, aluno2
let nota1, nota2

aluno1 = leia("Digite o nome do aluno 1: ")
nota1 = parseInt(leia("Digite a nota do aluno 1: "))

aluno2 = leia("Digite o nome do aluno 1: ")
nota2 = parseInt(leia("Digite a nota do aluno 1: "))

if(nota1<5){
    console.log("Olá "+aluno1+" você está de rec")
}
else{
    console.log("Olá "+aluno1+" você foi aprovado")
}

if(nota2<5){
    console.log("Olá "+aluno2+" você está de rec")
}
else{
    console.log("Olá "+aluno2+" você foi aprovado")
}