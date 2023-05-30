const PromptSync = require('prompt-sync');

class Brinquedo{
    constructor(id,descricao,ativo,estoque,preco,nome,tipo){
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.nome = nome,
        this.tipo = tipo
    }

    ativar(){
        if(this.ativa == false){ 
            this.ativa = true; 
            console.log("Produto ativado!") 
        } 
        else{ 
            console.log("O produto já está ativo") 
        }
    }
    
    retirarEstoque(quantia){
        if(this.estoque > 0){ 
            this.estoque -= quantia; 
            console.log(`Produto retirado! Estoque = ${this.estoque}`); 
        } 
        else { 
            console.log("Não é possível retirar nada do estoque!"); 
        }
    }

    incluirEstoque(quantia){
        if(this.ativa == true){ 
            if(quantia > 10){
                console.log("Limite de produtos por estoque atingido")
            }
            else{
                this.estoque += quantia; 
                console.log(`Produto adicionado! Estoque = ${this.estoque}`);
            }
        } 
        else { 
            console.log("Produto inativo") 
        }
    }
}

console.log("Toy Store")
console.log("Os brinquedos que darão vida à sua casa!")

function realizarCompra(){
    console.log("Toy Store")
    console.log("Os brinquedos que darão vida à sua casa!")
    let id = parseInt(leia("Insira o id do produto desejado: "));
    let descricao = leia("Insira a descrição do produto: ");
    let preco = parseFloat(leia("Insira o preço do produto"));
    let nome = leia("Insira o nome do produto: ");
    let tipo = leia("Insira o tipo do produto: ")

    const prdt1 = new Brinquedo(id,descricao,false,10,preco,nome,tipo);
    prdt1.ativar();

    for(i=1;i <=5;i++){
        console.log(`Venda${i}`);
        console.log(prdt1);
        let quantia = parseInt(leia("Quantos produtos você gostaria de comprar?: "));
        prdt1.retirarEstoque(quantia);
    }

    let quantia = parseInt(leia("Quantos produtos você deseja adicionar ao estoque?: "));
    prdt1.incluirEstoque(quantia);

    let quer = leia("Quer mais seu consumidor compulsivo?(S/N): ");
    if(quer == "S"){
     realizarCompra()
    }
    else{
        console.log("Até breve")
    }
}

const leia = require('prompt-sync')();
let quer = leia("Quer fazer compras?(S/N): ");
if(quer == "S"){
    realizarCompra()
}
else{
    console.log("Até breve")
}
