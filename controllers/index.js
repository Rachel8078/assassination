const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
// const userRoutes = require('./userRoutes');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
// router.use('/', userRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;