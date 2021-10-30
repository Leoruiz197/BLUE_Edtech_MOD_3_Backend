const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message:"bem vindos a nossa API"});
});

const pessoasRouter = require("./pessoas");
app.use("/pessoas",pessoasRouter);

const filmesRouter = require("./filmes");
app.use("/filmes",filmesRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});