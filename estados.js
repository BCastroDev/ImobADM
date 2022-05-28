const Sequelize = require('sequelize'); //importamos novamente e usamos para definir os campos lá em baixo
const database = require('./db') //importamos do DB.JS
const Estados = database.define('estados',{  //aqui fazemos o mapeamento pra correlacionar com o banco

id: {
type: Sequelize.INTEGER,   //S maiúsculo
autoIncrement:true,
allowNull: false,
primaryKey: true
},

nome: Sequelize.STRING,
uf: Sequelize.STRING,

})

// Estados.sync() //quando quiser criar a table



module.exports = Estados;  //criams o modelo e exportamos para chamar no app.js
