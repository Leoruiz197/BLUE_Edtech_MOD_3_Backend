const express = require("express"); //import do express
const router = express.Router(); //define app como express
const Personagem = require("./../models/personagens"); // import do modelo pessoa

router.get('/', (req,res) => {
    res.status(200).json({message:"rota personagem ok"});
});

router.get("/readAll", async (req,res) => {
    await Personagem.find({}).then((personagens) => {
        res.status(200).json(personagens);
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

module.exports = router;