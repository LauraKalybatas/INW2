class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar(){
        this.ativo = true;
    }

    credito(){
        if(this.ativo){
            if(this.ativo){
                console.log("Impossivel realizar, valor negativo..")
            }
            else if(valor==0){
                console.log("Impossível realizar, valor zerado..")
            }
            this.saldo += valor    
        }
        else{
            console.log("Conta inativa..")
        }
    }

    debito(){
        if(this.ativo){
            console.log("Conta ativa..")
            if(valor<0){
                console.log("Impossível realizar, valor negativo..")
            }
            else if(valor==0){
                console.log("Impossível realizar, valor zerado..")
            }
            else if(valor>=this.saldo){
                console.log("Impossível realizar, saldo indisponível")
            }
            else{
                this.saldo -= valor
                //same as: this.saldo = this.saldo - valor
            }
        }
        else{
            console.log("Conta inativa..")
        }
    }
}

//subclasse estudantil
class Estudantil extends Conta{
    constructor(numero,cpf,saldo,ativo,limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil
    }
    
    usarEstudantil(valor){
        if(valor<0){
            console.log("Impossível realizar, valor negativo..")
        }
        else if(valor==0){
            console.log("Impossível realizar, valor zerado..")
        }
        else if(valor > (this.saldo + this.limiteEstudantil)){
            console.log("Impossível realizar, sem valor no limite e saldo..")
        }
        else{
            this.limiteEstudantil -= valor
            credito(valor)
        }
    }
}


//programa principal
const leia = require("prompt-sync")()
let opcao = ""

//menu
do{
    console.log("")
    console.log("1 - CONTA CORRENTE")
    console.log("2 - CONTA EMPRESA")
    console.log("3 - CONTA ESTUDANTIL")
    console.log("4 - SAIR")
    opcao = leia("Digite o número da sua opção: ")
    if(opcao == "1"){
        console.log("testando conta corrente")
    }
    else if(opcao == "2"){
        console.log("testando conta empresa")
    }
    else if(opcao == "3"){
        console.log("CONTA ESTUDANTIL")
        let numero = leia("Digite o numero da conta: ")
        let cpf = leia ("Digite o cpf: ")
        //0, false, 5000
        let cone1 = new Estudantil(numero,cpf,0,false,5000)
        let op =""
        let valor = 0
        for (let x=1; x<=10; x++){
            valor = leia("Digite o valor: ")
            op = ("Digite D debito ou C crédito: ")
            if(op=="D"){
                cone1.debito(valor)
            }
            else if(op=="C"){
                cone1.credito(valor)
            }
            console.log("Saldo atual R$"+cone1.saldo)
        }
        valor = parseInt(leia("usar limite? Valor: "))
        cone1.usarEstudantil(valor)
        console.log("Saldo final: "+cone1.saldo)
    }
    else if(opcao == "4"){
        console.log("saindo do programa....")
    }
    else{
        console.log("Insersão inválida")
    }
} while(opcao != "4")
console.log("Fim do programa, volte sempre")


// let numero = parseInt(leia("Digite o numero da conta: "))
// let cpf = leia("Digite o cpf da conta: ")
// let c1 = new Conta(numero,cpf,0,false)
// let op =""
// c1.ativar()
// for(let x=1; x<=10;x++){
//     console.log("Movimento: "+x)
//     console.log("Saldo final da conta: "+c1.saldo)
//     op = leia("Digite D - debito ou C para credito: ")
//     if(op=="D"){
//         valor = parseInt(leia("Digite o valor para debito: "))
//         c1.debito(valor)
//     }
//     else if(op=="C"){
//         valor = parseInt(leia("Digite o valor para credito: "))
//         c1.credito(valor)
//     }
// }

// console.log("Saldo final da conta: "+c1.saldo)