//Criando tabela no banco de dados

const Database = require("./config");
const initDb = {
  //trabalhando com modulos externo
  async init() {
    const db = await Database();
    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`);
    await db.exec(`CREATE TABLE questions(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`);

    await db.close();
  },
};

initDb.init();
