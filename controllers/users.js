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

};
