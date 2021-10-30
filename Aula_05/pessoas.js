const express = require("express");
const router = express.Router();

let listaPessoas = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"Pessoas ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaPessoas);
});

router.get("/listar/:nome", (req,res) => {
    const nome = req.params.nome;
    const pessoa = listaPessoas.find((item) => item.nome === nome);
    res.status(200).json(pessoa);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaPessoas.findIndex((item) => item.nome === nome);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const pessoa = req.body;

    if(!pessoa.nome){
        res.status(400).json({message:"nome na requisição esta vazio"});
        return;
    }
    if(!pessoa.altura){
        res.status(400).json({message:"altura na requisição esta vazio"});
        return;
    }

    listaPessoas.push(pessoa); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const pessoa = listaPessoas[id];
    
    console.log(pessoa);
    
    listaPessoas[id] = req.body;

    res.status(200).json(listaPessoas[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaPessoas[id];
    console.log(listaPessoas[id]);
    res.status(200).json(listaPessoas);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaPessoas.splice(id,1);
    res.json(listaPessoas);
});

module.exports = router;