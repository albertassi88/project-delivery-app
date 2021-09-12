const router = require('express').Router();

const UserController = require('../controllers/user');
const adminAuth = require('../middlewares/adminAuth');

router.get('/', UserController.getAllUsers);

router.get('/sellers', UserController.getAllSellers);

router.post('/', UserController.create);

router.post('/admin', adminAuth, UserController.adminCreate);

router.delete('/', adminAuth, UserController.deleteUser);

module.exports = router;
