class Cupom{
    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

   #codCupom
    get codCupom() {
        return this.#codCupom
    }
    set codCupom(value) {
        this.#codCupom = value
    }
   #nomeCupom
    get nomeCupom() {
        return this.#nomeCupom
    }
    set nomeCupom(value) {
        this.#nomeCupom = value
    }
   #validadeCupom
    get validadeCupom() {
        return this.#validadeCupom
    }
    set validadeCupom(value) {
        this.#validadeCupom = value
    }
   #valorCupom    
    get valorCupom() {
        return this.#valorCupom
    }
    set valorCupom(value) {
        this.#valorCupom = value
    }
    constructor(nomeCupom, codCupom, validadeCupom, valorCupom){
        this.#nomeCupom = nomeCupom
        this.#codCupom = codCupom
        this.#validadeCupom = validadeCupom
        this.#valorCupom = valorCupom
    }
    
     
    toJson(){
        return {
            "id": this.#id,
            "nome": this.#nomeCupom,
            "Codigo": this.#codCupom,
            "validade": this.#validadeCupom,
            "valor": this.#valorCupom

        }
    }
}
module.exports = Cupom