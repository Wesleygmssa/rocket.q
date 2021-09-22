const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");
const route = express.Router(); //função de criar rotas

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

//Formato que o formulário de dentro do modal tem que passar a informação
route.get("/room/:room", RoomController.open);

//Criando sala
route.post("/create-room", RoomController.create);

//Entrando uma sala existente
route.post("/enterroom", RoomController.enter);

//Criando pergunta
route.post("/question/create/:room", QuestionController.create);

//Verificando a ação que será executada na pergunta
route.post("/question/:room/:question/:action", QuestionController.index);
module.exports = route; // exportando rotas
