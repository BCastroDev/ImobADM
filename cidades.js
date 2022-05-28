const Sequelize = require('sequelize'); //importamos novamente e usamos para definir os campos lá em baixo
const database = require('./db') //importamos do DB.JS
const Cidades = database.define('cidades',{  //aqui fazemos o mapeamento pra correlacionar com o banco

id: {
type: Sequelize.INTEGER,   //S maiúsculo
autoIncrement:true,
allowNull: false,
primaryKey: true
},

nome: Sequelize.STRING,
id_estado: Sequelize.INTEGER,

})

// Estados.sync() //quando quiser criar a table



module.exports = Cidades;  //criams o modelo e exportamos para chamar no app.js
