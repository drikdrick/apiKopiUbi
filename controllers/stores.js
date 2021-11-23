const sql = require('../configs/database');

module.exports = {
  getAllOpenStore(req, res) {
    const query = 'SELECT * FROM db_kopi_dev.branch_stores where isOpen =1;';
    sql.query(query, (err, results)=>{
      if (err) throw err;
      if (results.length) {
        res.json({
          status: true,
          message: 'Data berhasil diperoleh.',
          data: results,
        });
        res.end();
      } else {
        res.json({
          status: false,
          message: 'Tidak ada toko tersedia',
          data: [],
        });
        res.end();
      }
    });
  },
  getAllClosedStore(req, res) {
    const query = 'SELECT * FROM db_kopi_dev.branch_stores where isOpen =0;';
    sql.query(query, (err, results)=>{
      if (err) throw err;
      if (results.length) {
        res.json({
          status: true,
          message: 'Data berhasil diperoleh.',
          data: results,
        });
        res.end();
      } else {
        res.json({
          status: false,
          message: 'Tidak ada toko tersedia',
          data: [],
        });
        res.end();
      }
    });
  },
};
