const PromocaoDAO = require("../DAO/promocaoDAO.js")
const DescontoDAO = require("../DAO/descontoDAO.js")
const path = require("path")
const Promocao = require("../models/promocoesModels.js")
module.exports = (app) => {
    app.get("/promocoes", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
 
        //Você tem que fazer isso para os outros conseguirem acessar sua aplicação.
        //Repita essa configuração para as rotas que você quer liberar para ser acessada
        //por outras pessoas.
       
        const descontoDAO = new DescontoDAO()
        const lista_descontos = await descontoDAO.consultarDesconto()
        res.render("promocao/addpromocoes", { descontos: lista_descontos })
        //Retorna os dados
      
     })
     app.get("/getPromocao", async (req, res) => {
        const promocaoDAO = new PromocaoDAO()       
            
        res.setHeader("Access-Control-Allow-Origin","*")
        res.json(await promocaoDAO.consultarPromocao())
    })
     app.post("/registrarpromocao",(req,res) =>{
        const promocaoDAO = new PromocaoDAO();
        res.setHeader("Acess-Control-Allow-Origin","*")
        const {txtnomepromo, dtstartpromo, dtendpromo,txtdescpromo,ativapromo,seldescpromo} = req.body;

        promocaoDAO.registrarPromocao(txtnomepromo, dtstartpromo, dtendpromo,txtdescpromo,ativapromo,seldescpromo)

        res.status(201).json({ 
            msg: "ok"
        })
    })
    app.get("/promocoes/lista", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
        const promocaoDAO = new PromocaoDAO()
        const lista_promocoes = await promocaoDAO.consultarPromocao()
        res.render("promocao/listpromocoes", { promocoes: lista_promocoes })
    })
    app.delete("/promocoes/apagar/:id", async (req,res) =>{
        const promocaoDAO = new PromocaoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")
    
        res.json(await promocaoDAO.apagarPromocao(req.params.id))

    })
    app.get("/promocoes/alterar/:id", async (req, res) => {
        const promocaoDAO = new PromocaoDAO()
        const dtpromocao = await promocaoDAO.consultarPromocaoId(req.params.id)

        res.render("promocao/uppromocoes", { promocao: dtpromocao  })
    })
    app.put("/promocoes/alterar", async (req, res) => {
        const promocaoDAO = new PromocaoDAO()
        res.setHeader("Access-Control-Allow-Origin","*")

        //Destructuring
        const {nome, dtStart, dtEnd, descricao,ativa, id } = req.body

        const r = await promocaoDAO.atualizarPromocao(id,nome, dtStart, dtEnd, descricao,ativa)

        res.json({r})

    })
}