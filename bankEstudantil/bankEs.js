class Conta{ 
    constructor(numero, cpf, saldo, ativa){
        this.numero = numero; 
        this.cpf = cpf; 
        this.saldo = saldo; 
        this.ativa = ativa; 
    } 
    
    ativar(){ 
        if(this.ativa == false){ 
            this.ativa = true; 
            console.log("Conta ativada!") 
        } 
        else { 
            console.log("A conta já está ativa")
        } 
    }

    credito(valor){ 
        if(this.ativa == true){
            this.saldo += valor; 
            console.log(`Valor adicionado! Saldo = ${this.saldo}`); 
        } 
        else { 
            console.log("Conta inativa") 
        } 
    }

    debito(valor){ 
        if(this.saldo > 0){ 
            this.saldo -= valor; console.log(`Valor retirado! Saldo = ${this.saldo}`); 
        } 
        else { 
            console.log("Não é possível deixar o saldo negativo"); 
        } 
    }

    desativar(){ 
        if(this.ativa){ 
            this.ativa = false; console.log("Conta desativada!") 
        } 
        else { 
            console.log("A conta já está desativa") 
        } 
    } 
} 

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
        else if(valor > this.limiteEstudantil){ 
            console.log("Impossível realizar, sem valor no limite..") 
        } 
        else{ 
            this.limiteEstudantil -= valor 
            this.credito(valor) 
            console.log("Empréstimo realizado..") 
        } 
    } 
} 

else if(opcao == "3"){ 

    let numero = parseInt(leia("Insira o número da conta: ")); 
    let cpf = leia("Insira o cpf: "); 

    const c1 = new Estudantil(numero, cpf, 0, false, 5000); 

    let op=""; 
    let valor = 0; 
    let pede; 
    c1.ativar(); 
    
    for(i = 1; i <= 10; i++){ 
        console.log("Movimento: "+ i) 
        console.log("Saldo atual da conta: " + c1.saldo) 
        op = leia("Digite D para débito ou C para crédito: ") 
        
        if(op == "D"){ 
            valor = parseInt(leia("Digite o valor para debito: ")) 
            c1.debito(valor) 
        } 
        else if(op == "C"){ 
            valor = parseInt(leia("Digite o valor para credito: ")) 
            c1.credito(valor) 
        } 
        console.log("Saldo atual da conta: " + c1.saldo) 
        pede = leia("Gostaria de sair?(S/N) "); 
        if(pede == "S"){ 
            c1.desativar(); 
            break; 
        } 
        pede = leia("Gostaria de pedir um empréstimo?(S/N) "); 
        if(pede == "S"){ 
            valor = parseInt(leia("Digite o valor para o empréstimo: ")); 
            c1.usarEstudantil(valor); 
        } 
    } 
}