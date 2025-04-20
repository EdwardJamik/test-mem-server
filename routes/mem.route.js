const { memList } = require('../controllers/mem.controller');
const router = require('express').Router();

router.get('/memList', memList);

module.exports = router;