const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        user_id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL UNIQUE,
        user_weight NUMERIC,
        user_height NUMERIC,
        user_password VARCHAR(255),
        CONSTRAINT user_pk PRIMARY KEY(user_id)
    )`;
    await con.query(sql);
}
createTable();
  
  async function userExists(username) {
    const sql = `SELECT * FROM users
    WHERE username = "${username}"
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
  }


async function login(username, password) {
    const user = await userExists(username);
    if(!user[0]) throw Error('user not found');
    if(user[0].user_password !== password) throw Error('password is incorrect.');

    return user[0];
}


   async function getUser(user) {
       let sql;
       if(user.userId) {
           sql = `SELECT * FROM users
             WHERE username = "${user.userId}
             `
       } else {
           sql = `SELECT * FROM  users
           WHERE username = "${user.username}"
           `
       }
       return await con.query(sql);
   }


async function register(user) {
    const u = userExists(user.username);
    if(u.length>0) throw Error('username already exists')

    const sql = `INSERT INTO users (username, user_password)
    VALUES ( "${user.username}", "${user.password}"
    )`;
    const insert = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}
async function editUser(user) {
    const sql = ` UPDATE users SET
    username = "${user.userName}"
    WHERE user_id = ${user.userId}
    `;

    const update = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}

async function deleteUser(userId) {
    const sql = `DELETE FROM users
      WHERE user_id = ${userId}
      `;
      await con.query(sql);

}

   module.exports = {  login, register, deleteUser, editUser, getUser, createTable };

