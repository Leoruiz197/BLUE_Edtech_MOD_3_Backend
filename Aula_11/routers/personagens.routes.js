const express = require("express"); //import do express
const router = express.Router(); //define app como express
const Personagem = require("./../models/personagens"); // import do modelo pessoa
const PersonagemController = require('./../controller/personagens.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota personagem ok"});
});

router.get("/readAll", PersonagemController.getAll);

router.get("/readSingle/:id", async (req,res) => {
    const id  = req.params.id;
    await Personagem.findById(id).then((personagem) => {
        res.status(200).json(personagem);
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
});

router.post("/create", async (req,res) => {
    await Personagem.create(req.body).then( () => {
        res.status(201).json({message: "Personagem inserido com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
});

router.put("/update/:id", async (req,res) => {
    const id  = req.params.id;
    await Personagem.findByIdAndUpdate(id,req.body).then(() => {
        res.status(200).json({message: "Personagem atualizado com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
});

router.delete("/delete/:id", async (req,res) => {
    const id  = req.params.id;

    await Personagem.findByIdAndDelete(id).then(() => {
        res.status(200).json({message: "Personagem deletado com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
})

module.exports = router;