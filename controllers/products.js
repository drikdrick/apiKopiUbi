const sql = require('../configs/database');

module.exports = {
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
          status: true,
          message: 'Tidak ada produk tersedia.',
          data: results,
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
        res.status(404).json({
          status: false,
          message: 'Produk tidak tersedia.',
          // data: results,
        }); ;
      }
    });
  },
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
          status: true,
          message: 'Tidak ada kategori tersedia.',
          data: results,
        });
      }
    });
  },
  getProductsByCategory(req, res) {
    const query = 'Select * from products where category = ?';
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
          status: true,
          message: 'Tidak ada produk tersedia.',
          data: results,
        });
      }
    });
  },
};
