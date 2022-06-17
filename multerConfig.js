const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { dir } = require('console');
var imovelId = 4

// var finalName = "esse"

const storage = multer.diskStorage(
    {
        destination: (req, file, callback)=>{

            if (!fs.existsSync(imovelId)){
                //Efetua a criação do diretório
                fs.mkdirSync(path.resolve("uploads")+`/${imovelId}`)
            }
            


            callback(null, path.resolve("uploads")+`/${imovelId}`)
            imovelId++}, //Aqui vai a pasta
            
            filename:(req, file, callback)=>{
                const time=new Date().getTime();
                let finalName = `${time}_${file.originalname}`
                callback(null,finalName);
            }
            });


            
module.exports = storage
        