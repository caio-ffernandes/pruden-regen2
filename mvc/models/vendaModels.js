class Vendas{
    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
    hora
    get hora() {
        return this.hora
    }
    set hora(value) {
        this.hora = value
    }
    dia
    get dia() {
        return this.dia
    }
    set dia(value) {
        this.dia = value
    }
    skin
    get skin() {
        return this.skin
    }
    set skin(value) {
        this.skin = value
    }
    cupom
    get cupom() {
        return this.cupom
    }
    set cupom(value) {
        this.cupom = value
    }
    constructor(id,hora,dia,skin,cupom){
        this.id=id
        this.hora=hora
        this.dia=dia
        this.skin=skin
        this.cupom=cupom
    }

    toJson(){

        return{
            "id":this.#id,
            "hora":this.hora,
            "dia":this.dia,
            "skin":this.skin,
            "cupom":this.cupom
        }
    }
}
module.exports=Vendas