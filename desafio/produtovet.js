const leia = require("prompt-sync")()

let codigos = ["P01","P02","P03","P04"]
let produtos = ["CALÇA","SHORTS","SAIA","CAMISA"]
let precos = [0,0,0,0]

console.log("COD\tPRODUTOS\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}

for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i])
    precos = leia("Digite o valor do produto: ")

}

console.log("COD\tPRODUTOS\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}

console.log("COD\tPRODUTOS\tPREÇOS")
let codigo = leia("Digite o codigo do produto que deseja trocar o nome: ")
for(let i=0; i<codigos.length; i++){
    console.log("Nome atual do produto: "+produtos[i])
    produtos[1] = leia("Digite o novo nome: ")
}

console.log("COD\tPRODUTOS\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}