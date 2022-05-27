(async ()=>{
    
    const database = require('./db'); //db é a conexão que criamos
    const Imovel = require('./imovel'); //Imovel é o model que criamos
    await database.sync() //sincroniza o modelo que criamos com o db
    
    // const novoImovel = await Imovel.create({  
    //     nome: 'Mouse USB',
    //     preco: 15,
    //     descricao: 'Mouse bacana'
    // })

<<<<<<< HEAD
    const todos = await Imovel.findAll() //retorna todos os produtos no DB
=======
    const todos = await Produto.findAll() //retorna todos os produtos no DB Modificado
>>>>>>> b4cee76110c5eda4431116a7a811169d8d9f3166
    console.log(todos);


})();

