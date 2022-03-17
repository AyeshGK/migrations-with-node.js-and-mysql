require('dotenv').config();
const conn = require('./dbConn');

// let query = `Select * from "user"`;
let query = `Select * from user`;

conn.query(query, (err, res) => {
    if (!err) {
        console.log("rows here")
        console.log(res);
    } else {
        console.log(err.message)
    }
    conn.end;
})