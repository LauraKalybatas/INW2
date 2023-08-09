const { Console } = require("console")

const leia = require("prompt-sync")()

//variaveis

let matricula = []
matricula[0] = "M01"
matricula[1] = "M02"
matricula[2] = "M03"
matricula[3] = "M04"

let nome = ["Bana","Iany","Juls","Lora"]

let nota = [0,0,0,0]

let auxMat

console.log("MATRICULA\tNOME\tNOTA")

for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i]+"\t"+nota[i])
}

auxMat = leia("Digite a matricula: ").toUpperCase()

console.log(auxMat)