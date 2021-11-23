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
        res.end();
      } else {
        res.json({
          status: true,
          message: 'Tidak ada produk tersedia.',
          data: results,
        });
        res.end();
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
        res.end();
      } else {
        res.status(404).json({
          status: false,
          message: 'Produk tidak tersedia.',
          // data: results,
        });
        res.end();
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
        res.end();
      } else {
        res.json({
          status: true,
          message: 'Tidak ada kategori tersedia.',
          data: results,
        });
        res.end();
      }
    });
  },
  getProductsByCategory(req, res) {
    const query = 'Select * from products where categories = ?';
    sql.query(query, req.params.id, (err, results)=>{
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
          status: true,
          message: 'Tidak ada produk tersedia.',
          data: results,
        });
        res.end();
      }
    });
  },
};
