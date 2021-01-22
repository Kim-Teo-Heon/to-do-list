const express = require('express');
const router = express.Router();

const delete_ = require('../controllers/delete');

router.post('/:page_id',(req,res)=>{
    delete_.delete_data(req,res);
    res.redirect('/');
});

module.exports = router;