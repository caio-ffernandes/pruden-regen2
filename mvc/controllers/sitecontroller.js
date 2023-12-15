const path = require("path")

module.exports = (app) => {

    app.get("/home", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/home.html"))
     })

     app.get("/contato", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/contato.html"))
     })
     app.get("/cadastro", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/cadastro.html"))
     })
     app.get("/empresa", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/empresa.html"))
     })
     app.get("/equipe", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/equipe.html"))
     })
     app.get("/termos", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")
      
        
        res.sendFile(path.resolve("mvc/views/loja/termos.html"))
     })
     app.get("/senha", async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin","*")
    
      
      res.sendFile(path.resolve("mvc/views/loja/senha.html"))
   })
}