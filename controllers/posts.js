const moment = require('moment');
const sql = require('../configs/database');

module.exports = {
  addPost(req, res) {
    const data = {
      user: req.body.id,
      contents: req.body.contents,
      picture: req.body.picture ?? null,
      created_at: moment.now,
    };

    const query = `INSERT INTO posts set ?`;

    sql.query(query, data, (err, results)=>{
      if (err) {
        res.status(400).json({
          status: false,
          message: 'Postingan gagal diupload.',
        });
        res.end();
        throw (err);
      } else {
        res.json({
          status: true,
          message: 'Postingan berhasil diupload.',
        });
      }
    });
  },
};
