class Coin{
    nome
    valor
    imagem
    constructor(nome,valor,imagem){
        this.nome=nome
        this.valor=valor
        this.imagem=imagem
    }
    toJson(){

        return{
            "nome":this.nome,
            "valor":this.valor,
            "foto1":this.imagem
        }
       
        
    }
}
const coi=new Coin

