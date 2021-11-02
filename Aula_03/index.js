const express = require("express"); // import do express

const app = express(); //definindo nosso app como express

const port = 3000; //definindo porta do node

app.use(express.json()); //definindo que nosso app aceita JSON

let listaPessoas = [];

app.get("/", (req,res) => { //rota raiz tipo GET
    res.json({message:"bem vindos a nossa API"});
});

app.get("/listar", (req,res) => { //rota para listar tudo tipo GET
    res.json(listaPessoas);
});

app.get("/listar/:id", (req,res) => { //rota para listar por ID(index da lista) tipo GET
    const id = req.params.id; //params vem da URL
    res.json(listaPessoas[id]);
});

app.post("/", (req,res) => { //rota para criar tipo POST
    const pessoa = req.body;
    //console.log(pessoa.nome);
    listaPessoas.push(pessoa); //add no final da lista
    res.json({message:"cadastrado com sucesso"});
});

app.put("/:id", (req,res) => { //rota para atualizar por ID(index da lista) tipo PUT
    const id = req.params.id;
    const pessoa = listaPessoas[id];
    
    console.log(pessoa);
    
    listaPessoas[id] = req.body; //body vem do corpo da requisicao HTTP

    res.json(listaPessoas[id]);
});

app.delete("/:id", (req,res) => { //rota para excluir por ID(index da lista) tipo DELETE
    const id = req.params.id;
    delete listaPessoas[id]; //deixa a posicao da lista NULL
    console.log(listaPessoas[id]);
    res.json(listaPessoas);
});

app.delete("/deletar/:id", (req,res) => { //rota para excluir por ID(index da lista) tipo DELETE
    const id = req.params.id;
    listaPessoas.splice(id,1); //remove totalmente a posicao da lista
    res.json(listaPessoas);
});


app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});