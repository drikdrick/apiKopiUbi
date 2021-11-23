const moment = require('moment');
const sql = require('../configs/database');

module.exports = {
  addPost(req, res) {
    const data = {
      user: req.body.id,
      contents: req.body.contents,
      picture: req.body.picture ?? null,
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

  addComment(req, res) {
    const data = {
      posts: req.body.id,
      users: req.body.user_id,
      contents: req.body.contents,
      created_at: moment.now,
    };

    const query = 'INSERT INTO comments set ?';
    sql.query(query, data, (err, results)=>{
      if (err) {
        res.status(400).json({
          status: false,
          message: 'Komentar gagal diupload.',
        });
        throw err;
      }
      res.json({
        status: true,
        message: 'Komentar berhasil diupload.',
      });
    });
  },
};
