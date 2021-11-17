require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const con = require('./configs/database');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const appRoute = require('./routes/user-routes');
app.use('/', appRoute);
con.connect((err)=>{
  if (err) throw err;
  console.log('Koneksi ke database berhasil');
});
app.listen(5000, ()=>{
  console.log('Server berjalan di port: 5000');
});
