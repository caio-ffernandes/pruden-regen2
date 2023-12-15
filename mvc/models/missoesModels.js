class Missoes{
    nome
    descricao
    recompensa
    constructor(nome,descricao,recompensa){
        this.nome=nome
        this.descricao=descricao
        this.recompensa=recompensa
    }

    toJson(){

        return{
            "nome":this.nome,
            "Descrição":this.descricao,
            "recompensa":this.recompensa,
            
        }
       
        
    }
}
const misso=new Missoes