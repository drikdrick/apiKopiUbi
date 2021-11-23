const router = require('express')();
const {users, products, stores, orders, posts} = require('../controllers');
// User Module
router.get('/users', users.getAllUser );
router.get('/users/:id', users.getUserById );
router.post('/login', users.checkLogin);
router.post('/register', users.addUser);

// Product Module
router.get('/products', products.getAllProducts);
router.get('/products/:id', products.getProductsById);
router.get('/categories', products.getAllCategories);
router.get('/categories/:id', products.getProductsByCategory);

// Store Modules
router.get('/stores/open', stores.getAllOpenStore);
router.get('/stores/close', stores.getAllClosedStore);

// Post Modules
router.post('/post', posts.addPost);
router.post('/comment', posts.addComment);

// Order Modules
router.post('/order', orders.addNewOrder);

module.exports = router;
