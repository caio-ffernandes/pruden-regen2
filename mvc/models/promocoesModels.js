class Promocoes{
    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    nome
    get nome() {
        return this.nome
    }
    set nome(value) {
        this.nome = value
    }
    dtStart
    get dtStart() {
        return this.dtStart
    }
    set dtStart(value) {
        this.dtStart = value
    }
    dtEnd
    get dtEnd() {
        return this.dtEnd
    }
    set dtEnd(value) {
        this.dtEnd = value
    }
    descricao
    get descricao() {
        return this.descricao
    }
    set descricao(value) {
        this.descricao = value
    }
    ativa
    get ativa() {
        return this.ativa
    }
    set ativa(value) {
        this.ativa = value
    }
    desconto
    get desconto() {
        return this.desconto
    }
    set desconto(value) {
        this.desconto = value
    }
    constructor(nome,dtStart,dtEnd,descricao,ativa,desconto){
        this.nome=nome
        this.dtStart=dtStart
        this.dtEnd=dtEnd
        this.descricao=descricao
        this.ativa=ativa
        this.desconto=desconto
    }
    toJson(){

        return{
            "id":this.#id,
            "nome":this.nome,
            "dtStart":this.dtStart,
            "dtEnd":this.dtEnd,
            "descricao":this.descricao,
            "ativa":this.ativa,
            "desconto":this.desconto
            
        }
       
        
    }
}
module.exports= Promocoes