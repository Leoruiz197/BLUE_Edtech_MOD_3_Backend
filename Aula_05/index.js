const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

let listaPessoas = [];

app.get("/", (req,res) => {
    res.json({message:"bem vindos a nossa API"});
});

app.get("/listar", (req,res) => {
    res.json(listaPessoas);
});

app.get("/listar/:id", (req,res) => {
    const id = req.params.id;
    res.json(listaPessoas[id]);
});

app.post("/", (req,res) => {
    const pessoa = req.body;
    //console.log(pessoa.nome);
    listaPessoas.push(pessoa);
    res.json({message:"cadastrado com sucesso"});
});

app.put("/:id", (req,res) => {
    const id = req.params.id;
    const pessoa = listaPessoas[id];
    
    console.log(pessoa);
    
    listaPessoas[id] = req.body;

    res.json(listaPessoas[id]);
});

app.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaPessoas[id];
    console.log(listaPessoas[id]);
    res.json(listaPessoas);
});

app.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaPessoas.splice(id,1);
    res.json(listaPessoas);
});


app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});