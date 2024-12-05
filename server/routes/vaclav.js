var express = require('express');
var router = express.Router();

const vaclavController = require('../controllers/vaclav');

router.get('/', vaclavController.getAllVaclav);
router.get('/:id', vaclavController.getVaclav);
router.post('/', vaclavController.makeVaclav);
router.put('/:id', vaclavController.updateVaclav);
router.delete('/:id', vaclavController.deleteVaclav);

module.exports = router;
