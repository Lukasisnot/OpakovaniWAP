var express = require('express');
var router = express.Router();

const EnvironmentController = require('../controllers/environment');

router.get('/', EnvironmentController.getAllEnvironment);
router.get('/:id', EnvironmentController.getEnvironment);
router.post('/', EnvironmentController.makeEnvironment);
router.put('/:id', EnvironmentController.updateEnvironment);
router.delete('/:id', EnvironmentController.deleteEnvironment);

module.exports = router;
