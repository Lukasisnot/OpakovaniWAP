var express = require('express');
var router = express.Router();

const monkeyController = require('../controllers/monkey');

router.get('/', monkeyController.getAllMonkey);
router.get('/:id', monkeyController.getMonkey);
router.post('/', monkeyController.createMonkey);
router.put('/:id', monkeyController.updateMonkey);
router.delete('/:id', monkeyController.deleteMonkey);

module.exports = router;
