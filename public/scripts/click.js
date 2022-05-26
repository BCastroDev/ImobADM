const express = require('express');
const app = express();
const imovel = require('./imovel') //esse imovel é a modelagem que criamos do db
const bodyParser = require('body-parser');

 clickCard = (id)=> {
    console.log(id)
    app.delete('/delete/:id', async (req,res)=>{
        await Imovel.destroy({
            where: {
                id: req.params.id
            }
        })
    })
    // let modal = event.target;
    // modal.style.display = "none"
    
}