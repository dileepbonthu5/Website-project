require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
  host: process.env.localhost,
  user: process.env.root,
  password: process.env.Dillu@1999,
  database: process.env.games
});

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = { con, query };