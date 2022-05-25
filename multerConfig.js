const multer = require('multer');
const path = require('path');

// var finalName = "esse"

const storage = multer.diskStorage(
    {
        destination: (req, file, callback)=>{
            callback(null, path.resolve("uploads"))}, //Aqui vai a pasta
            
            filename:(req, file, callback)=>{
                const time=new Date().getTime();
                let finalName = `${time}_${file.originalname}`
                callback(null,finalName);
            }
            });


            
module.exports = storage
        