const router = require('express')();
const {users} = require('../controllers');

router.get('/users', users.getAllUser );

module.exports = router;
