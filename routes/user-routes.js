const router = require('express')();
const {users} = require('../controllers');

router.get('/users', users.getAllUser );
router.post('/login', users.checkLogin);
router.post('/register', users.addUser);

module.exports = router;
