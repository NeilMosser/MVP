var pg = require('pg');
var { Pool } = require('pg');

const pool = new Pool({
  user: postgres,
  host: localhost,
  database: music,
  port: 5432
})

client.connect((err) => {
  if(err) {
    console.log(err);
  } else {
  console.log("connected to db");
  }
});

module.exports = pool;