const express = require('express');
const router = express.Router();
const read = require('../controllers/read');

router.get('/',(req, res, next)=>{
    read.read_data(req, res);
})

module.exports = router;
