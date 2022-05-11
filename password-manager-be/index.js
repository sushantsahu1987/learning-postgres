require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool();

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.connect((err, client, done) => {
  if (err) throw err;
  console.log("connected successfully");
  //   client.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
  //     done()
  //     if (err) {
  //       console.log(err.stack)
  //     } else {
  //       console.log(res.rows[0])
  //     }
  //   })
});
