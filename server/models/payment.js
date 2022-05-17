const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS payments (
        payment_id INT NOT NULL AUTO_INCREMENT,
        paymentreferencename VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT payment_pk PRIMARY KEY(payment_id)
    )`;
    await con.query(sql);
}
createTable();
let getPayments = async () => {
    const sql = "SELECT * FROM payments";
    return await con.query(sql);
  };
  
  async function retrievePayment(paymentreferencename) {
    const sql = `SELECT * FROM payments
    WHERE paymentreferencename = "${paymentreferencename}"
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
  }

  async function getPayments(payment) {
      
      const sql = `INSERT INTO payments(paymentreferencename, payment_id)
        VALUES ( "${payment.paymentreferencename}", "${payment.payment_id}"
        )`;
    const insert = await con.query(sql);
    const newPayment = await getPayment(payment);
    return newpayment[0];
  }

  


   async function getPayment(payment) {
       let sql;
       if(payment.paymentId) {
           sql = `SELECT * FROM payments
             WHERE paymentreferencename = "${payment.paymentId}
             `
       } else {
           sql = `SELECT * FROM  payments
           WHERE paymentreferencename = "${payment.paymentreferencename}"
           `
       }
       return await con.query(sql);
   }
   module.exports = {getPayment, getPayments, retrievePayment, createTable}
