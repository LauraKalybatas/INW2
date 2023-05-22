class ContaEs{
    constructor(numero,cpf,saldo,ativo,emprestimo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
        this.emprestimo = emprestimo
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

    realizarEmprestimo(){
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

const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o numero da conta: "))
let cpf = leia("Digite o cpf da conta: ")
let c1 = new Conta(numero,cpf,0,false)
let op =""
c1.ativar()
for(let x=1; x<=10;x++){
    console.log("Movimento: "+x)
    console.log("Saldo final da conta: "+c1.saldo)
    op = leia("Digite D - debito ou C para credito: ")
    if(op=="D"){
        valor = parseInt(leia("Digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt(leia("Digite o valor para credito: "))
        c1.credito(valor)
    }
}

console.log("Saldo final da conta: "+c1.saldo)