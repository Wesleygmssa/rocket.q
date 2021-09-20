const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password; // pegando dados do form
    let roomId;

    //Gerando numero
    for (var i = 0; i < 6; i++) {
      i == 0
        ? (roomId = Math.floor(Math.random() * 10).toString())
        : (roomId += Math.floor(Math.random() * 10).toString());
    }

    //parseInt transformando string em numero
    const foundInstructor = await db.run(`INSERT INTO rooms(
      id,
      pass
    )VALUES (
      ${parseInt(roomId)},
      ${pass}
    )`);
    console.log(foundInstructor);

    await db.close();

    // res.render(`room`);
    res.redirect(`/room/${roomId}`);
  },
};
