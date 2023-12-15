const path = require('path')
const AtrativoDAO = require('../DAO/atrativoDAO')
const multer = require('multer')
const crypto = require('crypto')

const fs = require('fs').promises

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'views', 'public', 'images', 'upload'));
    },
    filename: function (req, file, cb) {
        const extensao = path.extname(file.originalname);

        const nomeArquivo = crypto.createHash('md5').update(file.originalname + Date.now().toString()).digest('hex') + extensao
        cb(null, nomeArquivo)

    }
})

const atrativoDAO = new AtrativoDAO()
const upload = multer({ storage: storage })

module.exports = (app) => {
    app.post('/registraratrativos', upload.single('photo'), async (req, res) => {
        console.log(req);
        try {
            const extensao = path.extname(req.file.originalname);
            const nomeArquivo = crypto.createHash('md5').update(req.file.originalname + Date.now().toString()).digest('hex') + extensao


            const caminhoDestino = path.join(__dirname, '..', 'views', 'public', 'images', 'upload', nomeArquivo);


            await fs.rename(req.file.path, caminhoDestino);

            console.log('Upload bem-sucedido');
            const {
                txtid: id,
                txtnomeatrativo: nome,
                txtlatatrativo: latitude,
                txtlongatrativo: longitude,
                txtdescatrativo: descricao,

            } = req.body


            let status;

            if (!id) {
                status = await atrativoDAO.registrarAtrativo(nome, nomeArquivo, latitude, longitude, descricao);
            }
            else { status = await atrativoDAO.atualizarAtrativo(id, nome, nomeArquivo, latitude, longitude, descricao) };

            res.json({ status });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao realizar o upload.')
        }
    })
    app.get("/atrativos", async (req, res) => {
        const atrativoDAO = new AtrativoDAO()

        //Resolve problemas de cors res.setheader("Access-Control-Allow-Origin", "")
        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json.
        res.json(await atrativoDAO.consultarAtrativo())
    })
    app.delete("/atrativo/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const atrativoDAO = new AtrativoDAO()
        const status = await atrativoDAO.apagarAtrativo(req.params.id)

        res.json({
            status
        })
    })

    app.put("/atrativo/alterar", async (req, res) => {
        const atrativoDAO = new AtrativoDAO()
        const {
            nome,
            descricao,
            lat,
            long,
            imagem,
            id
        } = req.body;
        if (id == req.params.id) {
            const r = await atrativoDAO.atualizarAtrativo(nome, descricao, lat, long, imagem, id)
            res.json({ msg: "O total de linhas alteradas: " + r })

        } else {
            res.json({ msg: 'Problema' })
        }
    })



    app.get("/atrativo/lista", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*")

        const atrativoDAO = new AtrativoDAO()
        const lista_atrativo = await atrativoDAO.consultarAtrativo()
   
        res.render("atrativos/listatrativos", { atrativos: lista_atrativo })

    })

    app.get("/atrativo/alterar/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")

        const atrativoDAO = new AtrativoDAO()
        const dtatrativo = await atrativoDAO.consultarAtrativoId(req.params.id)
        res.render('atrativos/upatrativos', {atrativo:dtatrativo})
    })

    app.get("/atrativo", (req, res) => {

    res.sendFile(path.resolve('mvc/views/ctrldev/atrativos/addatrativos.html'))
    })
    app.delete("/atrativo/apagar/:id", async (req,res) =>{
        const atrativoDAO = new AtrativoDAO();
        res.setHeader("Access-Control-Allow-Origin","*")
    
        res.json(await atrativoDAO.apagarAtrativo(req.params.id))

    })
}