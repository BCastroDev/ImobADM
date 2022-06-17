const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { dir } = require('console');


var imgFolder = 1;

const storage = multer.diskStorage(
    {
        destination: (req, file, callback)=>{
            
            if (!fs.existsSync(path.resolve("uploads")+`/${imgFolder}`)){     //Efetua a criação do diretório
                fs.mkdirSync(path.resolve("uploads")+`/${imgFolder}`)
                console.log("A pasta", imgFolder ,"não existia e foi criado")
            }
            else  {
                console.log("A pasta", imgFolder , "já existia")

            }
            callback(null, path.resolve("uploads")+`/${imgFolder}`)
            }, //Aqui vai a pasta
        
            filename:(req, file, callback)=>{
                const time=new Date().getTime();
                let finalName = `${time}_${file.originalname}`
                callback(null,finalName)

            }});




            
module.exports = storage
        