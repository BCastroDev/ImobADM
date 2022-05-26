const {Router} = require('express');
const {Imovel} = require('./imovel.js');

const router = Router();

router.delete('/:id', async (req,res)=>{
    await Imovel.destroy({
        where: {
            id: req.params.id
        }
    })
})

// class UserControler {
//     async findAll(req, res) {}
//     async findOne(req, res) {}
//     async create(req, res) {
//         const {nome,valor,descricao} = req.body;
//         const user = await Imovel.create({
//             nome,
//             nome,
//             idade
//         })
//     }
//     async update(req, res) {}
//     async destroy(req, res) {
//         const user = await Imovel.destroy(req.body.id)
//     }
    
//acho que tenho que tirar os tipos pq n é typescript


module.exports = UserController