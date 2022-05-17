const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS cart (
        cart_id INT NOT NULL AUTO_INCREMENT,
        cartname VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT cart_pk PRIMARY KEY(cart_id)
    )`;
    await con.query(sql);
}
createTable();
let getCart = async () => {
    const sql = "SELECT * FROM cart";
    return await con.query(sql);
  };
  
  async function Checkcart(cartname) {
    const sql = `SELECT * FROM cart
    WHERE cartname = "${carttname}"
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
  }

  async function Addtocart(products) {
      
      const sql = `INSERT INTO cart(gamesname, product_id)
        VALUES ( "${product.productname}", "${product.product_id}"
        )`;
    const insert = await con.query(sql);
    const newCart = await getcart(cart);
    return newCart[0];
  }

   module.exports = {getCart, addCart, checkCart, createTable}

