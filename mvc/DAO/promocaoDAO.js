const Promocoes=require('../models/promocoesModels')
const Database = require('../../repository/database')


class PromocaoDAO{
    #conexao

    constructor(){
        this.#conexao = new Database()
    }
    async consultarPromocao(){

        let list_promo = []
    
        const promos = await this.#conexao.selecionarPromocoes()
    
        if (promos) {
            for (const promocao of promos){
            const promo = new Promocoes()
    
            promo.id = promocao.id_promocao
            promo.nome = promocao.nome_promocao
            promo.dtStart = promocao.dt_start_promocao
            promo.dtEnd=promocao.dt_end_promocao
            promo.descricao=promocao.descr_promocao
            promo.ativa=promocao.ativa_promocao
            promo.desconto=promocao.descontos_id_desconto
            
    
            list_promo.push(promo.toJson()) 
        }    
        }
       
        return list_promo
    }
    async consultarPromocaoId(id){
    
        
    
        const promocao = await this.#conexao.selecionarPromocoesId(id)
    
       
            
            const promo = new Promocoes()
    
            promo.id = promocao[0].id_promocao
            promo.nome = promocao[0].nome_promocao
            promo.dtStart = promocao[0].dt_start_promocao
            promo.dtEnd=promocao[0].dt_end_promocao
            promo.descricao=promocao[0].descr_promocao
            promo.ativa=promocao[0].ativa_promocao
            promo.desconto=promocao[0].descontos_id_desconto
            
       
        return promo.toJson()
    }
    registrarPromocao(nome, dtstart, dtend, descricao, ativa,desconto){
    
        const promo = new Promocoes()
    
        promo.nome = nome
        promo.dtstart = dtstart
        promo.dtend = dtend
        promo.descricao= descricao
        promo.ativa = ativa
        promo.desconto = desconto
        
    
    
        this.#conexao.insertPromocao(promo.nome,promo.dtstart,promo.dtend ,promo.descricao,promo.ativa,promo.desconto)
    }
    async atualizarPromocao(id,nome, dtstart, dtend, descricao, ativa,desconto){
    
        const promo = new Promocoes()
    
        promo.id=id
        promo.nome = nome
        promo.dtstart = dtstart
        promo.dtend = dtend
        promo.descricao= descricao
        promo.ativa = ativa
        promo.desconto = desconto
    
        const dt = await this.#conexao.updatePromocao(promo.nome,promo.dtstart,promo.dtend ,promo.descricao,promo.ativa,promo.desconto,promo.id)
        return dt
    }
    async apagarPromocao(id){
        const dados =  await this.#conexao.deletePromocao(id)
        return dados
       }
}
module.exports=PromocaoDAO