const Atrativo = require("../models/atrativosModels");
const Database = require("../../repository/database");

class atrativoDAO {

    #conexao

    constructor() {
        this.#conexao = new Database();
    }

    async consultarAtrativo() {

        const lista_atrativo = []
        const atrativos = await this.#conexao.selecionarAtrativos()

        if (atrativos) {
            for (const atrativo of atrativos) {
                const objatrativo = new Atrativo()

                objatrativo.id = atrativo.id_atrativo
                objatrativo.nome =   atrativo.nome_atrativo
                objatrativo.longAtrativo = atrativo.long_atrativo
                objatrativo.latAtrativo = atrativo.lat_atrativo
                objatrativo.descricao = atrativo.desc_atrativo
                objatrativo.imagem = atrativo.image_atrativo


                lista_atrativo.push(objatrativo.toJson())
            }
        }

        return lista_atrativo
    }

    async consultarAtrativoId(id) {

        const atrativo = await this.#conexao.selecionarAtrativosId(id)
              
        const objatrativo = new Atrativo()

        objatrativo.id = atrativo.id_atrativo
        objatrativo.nome=atrativo.nome_atrativo
        objatrativo.longAtrativo = atrativo.long_atrativo
        objatrativo.latAtrativo = atrativo.lat_atrativo
        objatrativo.descricao = atrativo.desc_atrativo
        objatrativo.imagem = atrativo.image_atrativo
      

        return objatrativo.toJson()
    }

    registrarAtrativo(nome, descricao, latitude, longitude, foto){

        const atrativo = new Atrativo()

        atrativo.nome = nome
        atrativo.descricao = descricao
        atrativo.latAtrativo = latitude
        atrativo.longAtrativo = longitude
        atrativo.imagem = foto

        this.#conexao.insertAtrativo(atrativo.nome, atrativo.descricao, atrativo.latAtrativo, atrativo.longAtrativo,atrativo.imagem)
    }

    async atualizarAtrativo(id,nome, descricao, latitude, longitude, foto){

        const atrativo = new Atrativo()

        atrativo.id = id
        atrativo.nome = nome
        atrativo.descricao = descricao
        atrativo.latAtrativo = latitude
        atrativo.longAtrativo = longitude
        atrativo.imagem = foto

        const dt = await this.#conexao.updateAtrativo(atrativo.nome, atrativo.descricao, atrativo.latAtrativo, atrativo.longAtrativo,atrativo.imagem, atrativo.id)
        return dt
    }

    async apagarAtrativo(id){
     const dados =  await this.#conexao.deleteAtrativo(id)
     return dados
    }
}

module.exports = atrativoDAO


