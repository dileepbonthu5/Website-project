const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS games (
        game_id INT NOT NULL AUTO_INCREMENT,
        gamename VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT game_pk PRIMARY KEY(game_id)
    )`;
    await con.query(sql);
}
createTable();
let getgames = async () => {
    const sql = "SELECT * FROM games";
    return await con.query(sql);
  };
  
  async function retrieveProduct(gamename) {
    const sql = `SELECT * FROM games
    WHERE gametname = "${gamename}"
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
  }

  async function getgames(game) {
      
      const sql = `INSERT INTO games(gamename, game_id)
        VALUES ( "${product.gamename}", "${game.game_id}"
        )`;
    const insert = await con.query(sql);
    const newgame = await getgame(game);
    return newgame[0];
  }

  


   async function getgame(game) {
       let sql;
       if(game.gameId) {
           sql = `SELECT * FROM games
             WHERE gamename = "${game.gameId}
             `
       } else {
           sql = `SELECT * FROM  games
           WHERE gamename = "${game.gamename}"
           `
       }
       return await con.query(sql);
   }
   module.exports = {getgame, getgames, retrieveProduct, createTable}
