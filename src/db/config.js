const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); //abrir uma conexão com banco de dados

module.exports = () => {
  open({
    filename: "./src/db/rockeatq.sqlite",
    driver: sqlite3.Database,
  });
};
