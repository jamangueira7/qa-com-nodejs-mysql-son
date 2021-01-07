const express = require('express');
const router = express.Router();
const isAuth = require('./../../middlewares/isAuth');

router.post('/', isAuth, require('./answer-post'));
router.delete('/:id', isAuth, require('./answer-delete'));

module.exports = router;
