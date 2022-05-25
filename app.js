const express = require('express');
const app = express();
const imovel = require('./imovel') //esse imovel é a modelagem que criamos do db
const bodyParser = require('body-parser');
const storage  = require("./multerConfig"); //multer 
const multer = require('multer');
// const { stringify } = require('nodemon/lib/utils');
// const { path } = require('express/lib/application');
const upload = multer({storage: storage});
const path = require('path');

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/cadastro', async (req,res)=>{
    res.render( 'cadastro' )
})

app.get('/paginacompleta', async (req,res)=>{
    const imoveis = await imovel.findAll()
    
    res.render( 'paginaCompleta',{ imoveis } )  //é aqui que enviamos os dados do db
})

app.get('/', async (req,res)=>{
    const todosCadastros = await imovel.findAll() //Precisamos fazer como await
    res.send(todosCadastros)
})


//rota multer  //esta adicionando no db mas n faz upload
app.post("/upload", upload.single('arquivo') ,  (req,res)=> { //esse file é o nome do campo

     imovel.create(
        {
        imgPath: req.file.filename,
        nomeImovel: req.body.nomeImovel,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        vagasGaragem: req.body.vagasGaragem,
        quartos: req.body.quartos,
        preco: req.body.preco,
        descricao: req.body.descricao,
        tipo: req.body.tipo
})
    .then(async ()=>{
        const imoveis = await imovel.findAll()
        res.render('paginaCompleta',{imoveis}) })
    .catch(((erro)=>{res.send(erro)}))
    }); //Fim do APP.POST
    

    

app.listen(3000, ()=>{console.log('localhost:3000')})