const Sequelize = require('sequelize'); //importamos novamente e usamos para definir os campos lá em baixo
const database = require('./db') //importamos do DB.JS

const Imovel = database.define('imovel',{  //aqui fazemos o mapeamento pra correlacionar com o banco
id: {
type: Sequelize.INTEGER,   //S maiúsculo
autoIncrement:true,
allowNull: false,
primaryKey: true
},

imgPath: Sequelize.STRING,

nomeImovel: Sequelize.STRING,
cidade: Sequelize.STRING,
bairro: Sequelize.STRING,
vagasGaragem: Sequelize.DECIMAL,
quartos: Sequelize.DECIMAL,
valor: Sequelize.DECIMAL,
descricao: Sequelize.STRING,
tipo: Sequelize.STRING //comprar ou alugar

})

// Imovel.sync() //quando quiser criar a table

module.exports = Imovel;  //criams o modelo e exportamos para chamar no app.js
