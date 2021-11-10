const Personagem = require("./../models/personagens"); 

exports.getAll = async (req,res) => {
    await Personagem.find({}).then((personagens) => {
        res.status(200).json(personagens);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
}