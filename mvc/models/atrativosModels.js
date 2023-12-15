class Atrativos{
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

    latAtrativo
    get latAtrativo() {
        return this.latAtrativo
    }

    longAtrativo
    get longAtrativo() {
        return this.longAtrativo
    }

    descricao
    get descricao() {
        return this.descricao
    }

    imagem
    get imagem() {
        return this.imagem
    }
    constructor(nome,latAtrativo,longAtrativo,descricao,imagem){
        this.nome=nome
        this.latAtrativo=latAtrativo
        this.longAtrativo=longAtrativo
        this.descricao=descricao
        this.imagem=imagem
    }
    toJson(){
        return {
            "id":this.#id,
            "nome": this.nome,
            "latAtrativo": this.latAtrativo,
            "longAtrativo": this.longAtrativo,
            "descricao": this.descricao,
            "imagem": this.imagem

        }
    }
}
module.exports = Atrativos