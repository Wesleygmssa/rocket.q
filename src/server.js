const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();

//quando utiliza o set estamos modificando configurações padroes
server.set("view engine", "ejs");

server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true })); // conseguindo pegar dados do form

server.use(route);

server.listen(4000, () => {
  console.log("RODANDO");
});

/* __dirname se tranforma no nome da pasta que estamos configurando */
