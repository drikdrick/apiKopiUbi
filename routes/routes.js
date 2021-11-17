const router = require('express')();
const {users, products} = require('../controllers');
// User Module
router.get('/users', users.getAllUser );
router.get('/users/:id', users.getUserById );
router.post('/login', users.checkLogin);
router.post('/register', users.addUser);

// Product Module
router.get('/products', products.getAllProducts);
router.get('/products/:id', products.getProductsById);
router.get('/categories', products.getAllCategories);

module.exports = router;