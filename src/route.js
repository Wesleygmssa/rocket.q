const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const route = express.Router(); //função de criar rotas

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);
route.get("/room", (req, res) => res.render("room"));

//formato que o formulário de dentro do modal tem que passar a informação
route.post("/question/:room/:question/:action", QuestionController.index);

module.exports = route; // exportando rotas
