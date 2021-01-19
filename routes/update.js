const express = require('express');
const router = express.Router();
const update_get = require('../controllers/update-get');

router.get('/:page_id',(req, res, next)=>{
    update_get.read_data(req, res);
})

router.post('/:page_id',(req, res, next)=>{
    
})

module.exports = router;
