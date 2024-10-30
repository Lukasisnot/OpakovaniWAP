var express = require('express');
var router = express.Router();

const richManController = require('../controllers/bohata');

router.get('/', richManController.getAllRichMan);
router.get('/:id', richManController.getRichMan);
router.post('/', richManController.makeRichMan);
router.put('/:id', richManController.updateRichMan);
router.delete('/:id', richManController.deleteRichMan);

module.exports = router;
