//criacao da classe
class Animal{
    constructor(especie,peso,porte,anoNascimento){
        this.especie = especie;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento
    }

    fazBarulho(){
        console.log("fazendo barulho...")
    }

    voltaIdade(anoAtual){
        return (anoAtual - this.anoNascimento)
    }
}

class Gatoto extends Animal{
    constructor(especie,cor,raca){
        super(especie);
        this.cor = cor;
        this.raca = raca    
    }

    miar(){
        console.log("miaarrrrr....")
    }
}

//programa principal
let bicho1 = new Animal("felino",200,"grande porte",2000)
let bicho2 = new Animal("galinaceo",2,"porte pequeno",2022)
let bicho3 = new Gatoto("felino","laranja","bichano")

console.log(bicho1.especie)
bicho1.fazBarulho()
let idade = bicho1.voltaIdade(2023)
console.log(idade)
//ou console.log(bicho1.voltaIdade(2023))
console.log(bicho3.especie)
bicho3.fazBarulho()
bicho3.miar()
bicho3.anoNascimento = 2012 
console.log(bicho3.voltaIdade(2023))
