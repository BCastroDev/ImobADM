const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { dir } = require('console');

// const consulta = require('./consultaId')
// consulta()

const imgFolder = 1

function criarPasta(){

}



const storage = multer.diskStorage(
    {
        destination: (req, file, callback)=>{
            const time=new Date().getTime();
            let nomePasta = path.resolve("uploads")+`/${req.body.nomeImovel}`

            if (fs.existsSync(nomePasta)){     //Efetua a criação do diretório
                console.log(req.body)
            }
            else  {
                fs.mkdirSync(nomePasta)
                console.log("A pasta", imgFolder ,"não existia e foi criado")

            }

            callback(null, nomePasta)
            }, //Aqui vai a pasta
        
            filename:(req, file, callback)=>{
                const time=new Date().getTime();
                let finalName = `${time}_${file.originalname}`
                callback(null,finalName)

            }});




            
module.exports = storage
        