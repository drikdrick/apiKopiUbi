const moment = require('moment');
const sql = require('../configs/database');

module.exports = {
  getAllUser(req, res) {
    const query = 'Select * from users';

    sql.query(query, (err, results)=>{
      if (err) throw err;
      res.json({
        status: true,
        message: 'Data berhasil diperoleh!',
        data: results,
      });
    });
  },
  checkLogin(req, res) {
    const data = {email: req.body.email, password: req.body.password};
    // eslint-disable-next-line max-len
    const query = 'Select * from users where email = ? and password = ? and role = 2';
    sql.query(query, [data.email, data.password], (err, results)=>{
      if (err) throw err;
      if (results.length>0) {
        res.json({
          status: true,
          message: 'Login berhasil!',
          data: results[0],
        });
      } else {
        res.json({
          status: false,
          message: 'Email/password salah. Mohon coba kembali.',
        });
      }
    });
  },
  addUser(req, res) {
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: 2,
      created_at: moment().format('YYYY-MM-DD HH:MM:SS'),
      updated_at: moment().format('YYYY-MM-DD HH:MM:SS'),
    };
    const query = 'INSERT INTO users SET ?';
    sql.query(query, data, (err, results)=>{
      if (err) {
        console.log(err);
        res.json({
          status: false,
          message: 'Registrasi gagal, coba lagi.',
          data: err,
        });
      } else {
        res.json({
          status: true,
          message: 'Registrasi berhsil! Silahkan login.',
          data: results,
        });
      };
    });
  },
};
