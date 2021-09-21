const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password; // pegando dados do form
    let roomId;
    let isRoom = true;
    while (isRoom) {
      //Gerando numero
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      // Verificar se esse numero já existe
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);

      //Verificando se a condição existe retorna true
      isRoom = roomsExistIds.some((roomExistId) => roomExistId === roomId);

      // roomsExistIds.map((roomExistId) => {
      //   roomExistId === roomId;
      //   return true;
      // });

      //Se não exoste id no banco de dados inserir um novo
      if (!isRoom) {
        //parseInt transformando string em numero
        await db.run(`INSERT INTO rooms(
      id,
      pass
      )VALUES (
          ${parseInt(roomId)},
          "${pass}"
       )`);
      }
    }

    await db.close();

    // res.render(`room`);
    res.redirect(`/room/${roomId}`);
  },
  async open(req, res) {
    const db = await Database();
    const { room } = req.params;
    const roomId = room;
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId}`
    );
    res.render("room", { roomId: roomId, questions: questions });
  },
};
