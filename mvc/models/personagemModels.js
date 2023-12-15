class Personagem{
    nome
    genero
    tipo
    totalCoin
    startLagitude
    startLongitude
    constructor(nome,genero,tipo,totalCoin,startLagitude,startLongitude){
        this.nome=nome
        this.genero=genero
        this.tipo=tipo
        this.totalCoin=totalCoin
        this.startLagitude=startLagitude
        this.startLongitude=startLongitude
    }
    trocarNome(){

    }
    trocarGenero(){

    }
    toJson(){

        return{
            "nome":this.nome,
            "Genero":this.genero,
            "Tipo":this.tipo,
            "Quantidade de moedas":this.totalCoin,
            "Longitude inicial":this.startLongitude,
            "Lagitude inicial":this.startLagitude,
            
        }
       
        
    }
}
const perso=new Personagem