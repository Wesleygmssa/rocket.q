const express = require("express");
const route = express.Router(); //função de criar rotas

route.get("/", (req, res) => res.render("index"));

module.exports = route; // exportando rotas
