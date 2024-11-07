var express = require('express');
var router = express.Router();

const carController = require('../controllers/car');

router.get('/', carController.getAllCar);
router.get('/:id', carController.getCar);
router.post('/', carController.makeCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
