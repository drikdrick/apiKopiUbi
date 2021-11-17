const sql = require('../configs/database');

module.exports = {
  getAllCategories(req, res) {
    const query = 'Select * from categories';
    sql.query(query, (err, results)=>{
      if (err) throw err;
      if (results.length) {
        res.json({
          status: true,
          message: 'Data berhasil diperoleh.',
          data: results,
        });
      } else {
        res.json({
          status: false,
          message: 'Tidak ada data yang diperoleh.',
        });
      }
    });
  },
  getAllProducts(req, res) {
    const query = 'Select * from products';
    sql.query(query, (err, results)=>{
      if (err) throw err;
      if (results.length) {
        res.json({
          status: true,
          message: 'Data berhasil diperoleh.',
          data: results,
        });
      } else {
        res.json({
          status: false,
          message: 'Tidak ada data yang diperoleh.',
        });
      }
    });
  },
  getProductsById(req, res) {
    const query = 'Select * from products where idproducts = ?';
    sql.query(query, req.params.id, (err, results)=>{
      if (err) throw err;
      if (results.length) {
        res.json({
          status: true,
          message: 'Data berhasil diperoleh.',
          data: results,
        });
      } else {
        res.json({
          status: false,
          message: 'Produk tidak tersedia.',
        });
      }
    });
  },
};
