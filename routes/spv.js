var express = require('express');
var router = express.Router();

// Require controller modules.
var spv_controller = require('../controllers/spvController');

/// SPV ROUTES ///

// GET spv home page.
router.get('/', spv_controller.index);

// GET request to update DRC Error global status.
router.get('/AllCell/:drcError/', spv_controller.drcerror_update_get);

// POST request to update DRC Error global status.
router.post('/AllCell/:drcError/', spv_controller.drcerror_update_post);

// GET request to update Cell error status.
router.get('/:spvCell/:drcError/', spv_controller.spvcell_update_get);

// POST request to update Cell error status.
router.post('/:spvCell/:drcError/', spv_controller.spvcell_update_post);

module.exports = router;
