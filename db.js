const Sequelize = require('sequelize');
const sequelize = new Sequelize('imob', 'root', 'Bruno220388', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate()
.then(function(){console.log("Conexão ok")})
.catch(function(){console.log("Erro na conexão")
});



module.exports = sequelize