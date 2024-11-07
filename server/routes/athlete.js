var express = require('express');
var router = express.Router();

const athleteController = require('../controllers/athlete');

router.get('/', athleteController.getAllAthlete);
router.get('/:id', athleteController.getAthlete);
router.post('/', athleteController.makeAthlete);
router.put('/:id', athleteController.updateAthlete);
router.delete('/:id', athleteController.deleteAthlete);

module.exports = router;
