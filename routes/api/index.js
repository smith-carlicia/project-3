const router = require('express').Router();
const productRoutes = require('./product');

router.use('/product', productRoutes);
// router.use('/user', userRoutes);
router.use((req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

module.exports = router;