const rootRouter = require('express').Router();
const userRouter = require('./user');
const saleRouter = require('./sales');

const LoginController = require('../controllers/login');
const ProductsController = require('../controllers/products');

rootRouter.use('/user', userRouter);

rootRouter.use('/sales', saleRouter);

rootRouter.post('/login', LoginController.login);

rootRouter.get('/products', ProductsController.getAllProducts);

module.exports = rootRouter;
