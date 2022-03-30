const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/waiting', (req, res) => {
  res.render('host-wait-pg');
});

module.exports = router;