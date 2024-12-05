var express = require('express');
var router = express.Router();

const gameController = require('../controllers/game');

router.get('/', gameController.getAllGame);
router.get('/:id', gameController.getGame);
router.post('/', gameController.makeGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;
