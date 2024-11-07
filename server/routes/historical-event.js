var express = require('express');
var router = express.Router();

const HistoricalEventController = require('../controllers/historical-event');

router.get('/', HistoricalEventController.getAllHistoricalEvent);
router.get('/:id', HistoricalEventController.getHistoricalEvent);
router.post('/', HistoricalEventController.makeHistoricalEvent);
router.put('/:id', HistoricalEventController.updateHistoricalEvent);
router.delete('/:id', HistoricalEventController.deleteHistoricalEvent);

module.exports = router;
