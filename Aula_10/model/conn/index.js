const mongoose = require("mongoose");  //importando o mongoose

async function Conn(){
    await mongoose.connect(`mongodb+srv://admin:<password>@cluster0.zbtgg.mongodb.net/test`,{ // string de conexao ou local ou atlas
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { // tudo certo faz isso
        console.log("MongoDB esta conectado");
    }).catch((err) => { // caso de erro faz isso
        console.error(err);
    });
}

module.exports = Conn; //exporta a conexao