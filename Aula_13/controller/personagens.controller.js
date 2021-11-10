const Personagem = require("./../models/personagens"); 

function validarEntrada(requisicao){
    if(!requisicao.nome){
        res.status(400).json({message: "nome não foi inserido na requisicao"});
        return;
    }else if(!requisicao.imagemUrl){
        res.status(400).json({message: "a URL da imagem não foi inserida na requisicao"});
        return;
    }
}

exports.getAll = async (req,res) => {
    await Personagem.find({}).then((personagens) => {
        res.status(200).json(personagens);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => {
    await Personagem.findById(req.params.id).then((personagem) => {
        res.status(200).json(personagem);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => {
    validarEntrada(req.body);
    await Personagem.create(req.body).then( () => {
        res.status(201).json({message: "Personagem inserido com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    validarEntrada(req.body);
    await Personagem.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Personagem atualizado com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    await Personagem.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Personagem deletado com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
}