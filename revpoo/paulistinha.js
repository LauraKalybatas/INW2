const leia = require("prompt-sync")()
//arrays ou vetores
let alunos = ['','','','']
let notas = [0,0,0,0]
for(let x=0; x<alunos.length; x++){
    alunos[x] = parseInt(leia("Digite o nome do aluno: "))
    notas[x] = parseInt(leia("Digite a nota: "))
}
console.log("BOLETIM")
console.log("ALUNO\tNOTA")
for(let x=0; x<alunos.length; x++){
    console.log(alunos[x]+'\t'+notas[x])
    if(notas[x]>5){
        console.log("Aprovado")
    }
    else{
        console.log("Reprovado")
    }
}




// console.log("TIME\tPONTOS")
// for(let i=0; i<4; i++){
//     console.log(equipes[0]+'\t'+pontos[0])
// }

// let equipe1 = 'SFC'
// let equipe2 = 'SPFC'
// let equipe3 = 'SCCP'
// let equipe4 = 'SEP'

// let pontos1 = 3
// let pontos2 = 3
// let pontos3 = 3
// let pontos4 = 3

//console.log(alunos[x])