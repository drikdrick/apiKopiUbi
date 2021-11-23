const sql = require('../configs/database');
const {nanoid} = require('nanoid');

module.exports = {
  addNewOrder(req, res) {
    const data = {
      user: req.body.user_id,
      store: req.body.store_id,
      promo: req.body.prommo_id ?? null,
      code: nanoid(),
    };
    const items = req.body.items;
    const query = 'INSERT INTO orders set ?';
    console.log(data.code);
    sql.query(query, data, (err, results)=>{
      if (err) {
        res.status(400).json({
          status: false,
          message: 'Ordermu gagal di input.',
        });
        throw err;
      } else {
        for (let index = 0; index < items.length; index++) {
          const elements = {
            product: items[index].product_id,
            order: results.insertId,
            quantity: items[index].quantity,
            price: items[index].price,
          };
          const addQuery = 'INSERT INTO order_detail set ?';
          sql.query(addQuery, elements, (err, newResults)=>{
            console.log(newResults);
            // if (err) {
            //   res.status(400).json({
            //     status: false,
            //     message: 'Gagal nambahin produk ke order.',
            //   });
            //   throw err;
            // } else {
            //   res.json({
            //     status: true,
            //     message: 'Order mu berhasil di input.',
            //     data: results,
            //   });
            // }
          });
        }
        res.json({
          status: true,
          message: 'Order mu berhasil di input.',
          data: results,
        });
      }
    });
  },
};
