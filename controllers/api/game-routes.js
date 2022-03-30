const router = require('express').Router();
const { Game } = require('../../models');

router.get('/', (req, res) => {
  const gameCode = Math.random().toString(36).slice(2, 8);
  Game.create({
    code: gameCode,
  }).then((gameData) => {
    req.session.gameCode = gameData.code;
    if (req.session.user) res.redirect('/game/host');
  });
});

router.post('/', (req, res) => {
  Game.create({
      game_code: req.body.game_code,
  })
      .then((dbHostData) => res.json(dbHostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Game.update(req.body, {
    individualHooks: true,
    where: {
      game_code: req.params.game_code,
    },
  })
    .then((dbHostData) => {
      if (!dbHostData[0]) {
        res.status(404).json({ message: 'No host found with this id' });
        return;
      }
      res.json(dbHostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbHostData) => {
      if (!dbHostData) {
        res.status(404).json({ message: 'No host found with this id' });
        return;
      }
      res.json(dbHostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
