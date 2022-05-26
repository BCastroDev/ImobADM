const express = require('express');
const router = express.router();
const UserControler = require('./controllers/userControllers')


//ainda não esta sendo usado, apenas para salvar a ideia
router.post("/imoveis", UserControler.create)
router.get("/imoveis", UserControler.findAll)
router.get("/imoveis/:userID", UserControler.findOne)
router.put("/imoveis/:imoveisID", UserControler.update)
router.delete("/imoveis/imoveisID", UserControler.destroy)

module.exports = { router }