const router = require('express').Router();

const authorRoutes = require('./author.routes');
const bookRoutes = require('./book.routes');

router.use('/author', authorRoutes);
router.use('/book', bookRoutes);

module.exports = router;