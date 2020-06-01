const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT||4000;
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


var pool = mysql.createPool({
    connectionLimit: 20000,
    acquireTimeout: 100000, //30 secs
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});


app.get('/get/transaction', (req, res) => {

    pool.getConnection(function (err, connection) {

        if (err) {
            console.log(err);
        } else {
            connection.query(
                'SELECT BUY_DATE as DATE, MARKET, SIZE_Q, BUY_AMOUNT, SELL_AMOUNT, TAX, FEE FROM server_test ORDER BY BUY_DATE DESC',
                (err, rows, fields) => {
                    res.send(rows);
                }
            )
            connection.release();
            }
        })
});

app.get('/get/daily', (req, res) => {

    pool.getConnection(function (err, connection) {

        if (err) {
            console.log(err);
        } else {
            connection.query(
                'SELECT BUY_DATE as DATE, sum(server_test.BUY_AMOUNT) as TOTAL_BUY, sum(server_test.SELL_AMOUNT) as TOTAL_SELL, sum(TAX) as TOTAL_TAX, sum(FEE) as TOTAL_FEE, avg(test_pl.TOTAL_ASSET) as TOTAL_ASSET FROM server_test INNER JOIN test_pl ON server_test.BUY_DATE = test_pl.DATE GROUP BY BUY_DATE',
                (err, rows, fields) => {
                    res.send(rows);
                }
            )
            connection.release();
            }
        })
});



app.listen(port, ()=>console.log(`Listening to Port ${port}`));