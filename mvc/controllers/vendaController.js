const VendasDAO = require("../DAO/vendaDAO.js")
const path = require("path")
const Venda = require("../models/vendaModels.js")
const CupomDAO = require('../DAO/cupomDAO')
const SkinDAO = require("../DAO/SkinDAO.js")

module.exports = (app) => {
    app.get("/vendas", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
 
        //Você tem que fazer isso para os outros conseguirem acessar sua aplicação.
        //Repita essa configuração para as rotas que você quer liberar para ser acessada
        //por outras pessoas.
        const cupomDAO = new CupomDAO()
        const lista_cupons = await cupomDAO.consultarCupons()
        const skinDAO = new SkinDAO()
        const lista_skins = await skinDAO.consultarSkins()
        res.render("venda/addvendas", { cupons: lista_cupons,skins: lista_skins })
       
        //Retorna os dados

      
     })
     app.post("/registrarvenda",(req,res) =>{
        const vendaDAO = new VendasDAO();
        res.setHeader("Acess-Control-Allow-Origin","*")
        const {txthoravendas,selskivendas,txtdiavendas,selcupvendas} = req.body

        vendaDAO.registrarVenda(txthoravendas,selskivendas, txtdiavendas,selcupvendas)

        res.status(201).json({ 
            msg: "ok"
        })
    })
    app.get("/getVenda", async (req, res) => {
        const vendaDAO = new VendasDAO()      
            
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await vendaDAO.consultarVendas())
    })
    app.get("/vendas/lista", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const vendaDAO = new VendasDAO()   
        const lista_vendas = await vendaDAO.consultarVendas()
        res.render("venda/listvendas", { vendas: lista_vendas })
    })
    app.delete("/vendas/apagar/:id", async (req,res) =>{
        const vendaDAO = new VendasDAO()  ;
        res.setHeader("Access-Control-Allow-Origin","*")
    
        res.json(await vendaDAO.apagarVenda(req.params.id))

    })
    app.get("/vendas/alterar/:id", async (req, res) => {
        const vendaDAO = new VendasDAO() 
        

        const dtvenda = await vendaDAO.consultarVendasId(req.params.id)
       

        res.render("venda/upvendas", { venda: dtvenda  })
    })
    app.put("/vendas/alterar", async (req, res) => {
        const vendaDAO = new VendasDAO() ;
        res.setHeader("Access-Control-Allow-Origin","*")

        //Destructuring
        const {hora, dia,skin,cupom,id } = req.body

        const r = await vendaDAO.atualizarVenda(id, hora, dia,skin,cupom)

        res.json({r})

    })
}