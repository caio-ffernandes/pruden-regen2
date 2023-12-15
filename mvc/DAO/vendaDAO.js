const Vendas= require('../models/vendaModels')
const Database = require('../../repository/database')

class VendasDAO{

    #conexao

    constructor(){
        this.#conexao = new Database()
    }

    async consultarVendas(){

        let list_vendas = []
    
        const vendas = await this.#conexao.selecionarVendas()
    
        if (vendas){
            for (const veenda of vendas){
            const venda = new Vendas()
            venda.id = veenda.id_venda
            venda.dia = veenda.hora_venda
            venda.hora = veenda.dia_venda
            venda.skin = veenda.skins_id_skin
            venda.cupom = veenda.cupons_id_cupon
         list_vendas.push(venda.toJson())     
            }
    
           
        }
       
        return list_vendas
    }
    async consultarVendasId(id) {
    
        const venda = await this.#conexao.selecionarVendasId(id)
              
        const objVenda = new Vendas()
    
        objVenda.id=venda[0].id_venda
        objVenda.dia = venda[0].dia_venda
        objVenda.hora=venda[0].hora_venda
        objVenda.skin=venda[0].skins_id_skin
        objVenda.cupom=venda[0].cupons_id_cupon
      
    
        return objVenda.toJson()
    }
    registrarVenda(dia, hora,skin,cupom){
    
        const venda = new Vendas()
    
        venda.dia = dia
        venda.hora = hora
        venda.skin = skin
        venda.cupom = cupom
    
    
        this.#conexao.insertVenda(venda.dia,venda.hora,venda.skin,venda.cupom)
    }
    async atualizarVenda(id,hora,dia,skin,cupom){
    
        const venda = new Vendas()
    
        venda.id = id
        
        venda.hora = hora
        venda.dia = dia
        venda.skin = skin
        venda.cupom = cupom
        
        const dt = await this.#conexao.updateVenda(venda.id,venda.hora,venda.dia,venda.skin,venda.cupom)
        return dt
    }
    async apagarVenda(id){
        const dados =  await this.#conexao.deleteVenda(id)
        return dados
       }
}
module.exports=VendasDAO