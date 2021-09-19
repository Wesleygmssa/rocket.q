const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); //abrir uma conexão com banco de dados
//OBS se ligar no retorno da função
module.exports = () => {
  return open({
    filename: "./src/db/rocketq.sqlite",
    driver: sqlite3.Database,
  });
};

// const sqlite3 = require("sqlite3");
// const { open } = require("sqlite");

// module.exports = () =>
//   open({
//     filename: "./src/db/rocketq.sqlite",
//     driver: sqlite3.Database,
//   });
