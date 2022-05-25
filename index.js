(async ()=>{
    
    const database = require('./db'); //db é a conexão que criamos
    const Produto = require('./produto'); //Produto é o model que criamos
    await database.sync() //sincroniza o modelo que criamos com o db
    
    // const novoProduto = await Produto.create({  
    //     nome: 'Mouse USB',
    //     preco: 15,
    //     descricao: 'Mouse bacana'
    // })

    const todos = await Produto.findAll() //retorna todos os produtos no DB
    console.log(todos);


})();

