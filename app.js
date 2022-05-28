const express = require('express');
const app = express();
const imovel = require('./imovel') //esse imovel é a modelagem que criamos do db
const bodyParser = require('body-parser');
const storage  = require("./multerConfig"); //multer 
const multer = require('multer');
const upload = multer({storage: storage});
// const controllers = require('./controllers/imoveisControllers')
const { stringify } = require('nodemon/lib/utils');
// const { path } = require('express/lib/application');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); //middleware  
//precisa disso pro express entender o que está sendo enviado pelo body
app.set('view engine', 'ejs');

app.use('/uploads', express.static('uploads'));
app.use('/assets' , express.static(__dirname + '/public/assets'));
app.use('/assets/js' , express.static(__dirname + '/public/assets/js'));
app.use('/assets/css' , express.static(__dirname + '/public/assets/css'));


app.get('/inicio', async (req,res)=>{
    const imoveis = await imovel.findAll()
    res.render('index',{ imoveis } )
})





//pega a página de cadastro
app.get('/cadastro', async (req,res)=>{
    res.render( 'cadastro' )
})

//pega tudo e renderiza a paginaCompleta
app.get('/paginacompleta', async (req,res)=>{
    const imoveis = await imovel.findAll()
    res.render( 'paginaCompleta',{ imoveis } )  //é aqui que enviamos os dados do db
    
})

//pega tudo
app.get('/', async (req,res)=>{
    const todosCadastros = await imovel.findAll() //Precisamos fazer como await
    res.send(todosCadastros)
})


//rota multer
app.post("/upload", upload.single('arquivo') ,  (req,res)=> { //esse file é o nome do campo

    imovel.create(
        {
        imgPath: req.file.filename,
        nomeImovel: req.body.nomeImovel,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        vagasGaragem: req.body.vagasGaragem,
        quartos: req.body.quartos,
        valor: req.body.valor,
        descricao: req.body.descricao,
        tipo: req.body.tipo
})
    .then(async ()=>{
        const imoveis = await imovel.findAll()
        res.render('paginaCompleta',{imoveis}) })
    .catch(((erro)=>{res.send(erro)}))
    }); //Fim do APP.POST
    
//deleta de acordo com o ID da requisição
app.delete('/delete/:id', async (req,res)=>{
    res.send("deletado")
    await imovel.destroy(
        { where: { id: req.params.id } }
    )})
    
//pega apenas um elemento de acordo com o ID
app.get('/select/:id', async (req,res)=>{
    const selected = await imovel.findByPk(req.params.id)
    .then((result) => res.send(result))
        } )


//atualizar por ID
app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    imovel.update(req.body, {
      where: { id: id }
    })
    .then(
        async (result) => {
            const atualizado = await imovel.findByPk(req.params.id)
            res.send(atualizado)
        })})
        



app.listen(3000, ()=>{console.log('localhost:3000')})