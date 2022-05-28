(async ()=>{
    
    const database = require('./db'); //db é a conexão que criamos
    const Imovel = require('./imovel'); //Imovel é o model que criamos
    await database.sync() //sincroniza o modelo que criamos com o db
    
    // const novoImovel = await Imovel.create({  
    //     nome: 'Mouse USB',
    //     preco: 15,
    //     descricao: 'Mouse bacana'
    // })

    // const todos = await Imovel.findAll() //retorna todos os produtos no DB
    // console.log(todos);


})();

