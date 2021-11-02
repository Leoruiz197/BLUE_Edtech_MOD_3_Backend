const express = require("express"); // import do express

const app = express(); //definindo nosso app como express

const port = 3000; //definindo porta do node

app.use(express.json()); //definindo que nosso app aceita JSON

app.get("/", (req,res) => {
    res.status(200).json({message:"bem vindos a nossa API"}); //.status devolve com o status http que passarmos
});

const pessoasRouter = require("./pessoas"); //importando arquivo de rota externa
app.use("/pessoas",pessoasRouter); //definindo o arquivo na nossa aplicacao

const filmesRouter = require("./filmes");
app.use("/filmes",filmesRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});