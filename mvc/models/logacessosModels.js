class LogAcesso{
    ultimo
    quantidade
    status
    constructor(ultimo,quantidade,status){
        this.ultimo=ultimo
        this.quantidade=quantidade
        this.status=status
    }
    toJson(){

        return{
            "Ultimo acesso":this.ultimo,
            "quantidade de acessos":this.quantidade,
            "Status":this.status,
            
        }
       
        
    }
}
const log=new LogAcesso