// console.log("NOME\tNOTA\tTURMA")
// console.log("Lora\t12\t2MIB")
// console.log("Iany\t1000\t2MIB")
// console.log("Naba\t11\t2MIB")

// let nome = "Pedro"
// let valor1 = 10
// let valor2 = 20
// let valor3 = valor1+valor2

// console.log("Eai meu mano "+nome.toUpperCase())
// console.log("A soma dos dois valores é: ",(valor1+valor2))

const leia = require("prompt-sync")()

let numero1 = 0
let numero2 = 0

numero1 =  parseInt(leia("Digite o primeiro número: "))
numero2 =  parseInt(leia("Digite o segundo número: "))

console.log("a soma de "+numero1+" mais "+numero2+" é: "+(numero1+numero2))
