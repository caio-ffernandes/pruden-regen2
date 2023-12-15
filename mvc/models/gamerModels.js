class Gamer{
    nome
    senha
    email
    datanasc
    constructor(nome,senha,email,datanasc){
        this.nome=nome
        this.senha=senha
        this.email=email
        this.datanasc=datanasc
    }
    toJson(){

        return{
            "nome":this.nome,
            "senha":this.senha,
            "email":this.email,
            "Data de nascimento":this.datanasc,
            
        }
       
        
    }
}
const game=new Gamer