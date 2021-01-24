const express = require('express');
const router = express.Router();

const status = require('../controllers/status');

router.post('/Y/:page_id',(req, res)=>{
    status.update_status(req,res);
    res.redirect('/');
})

router.post('/N/:page_id',(req, res)=>{
    status.update_status(req,res);
    console.log(req.body)
    res.redirect('/');
})

module.exports = router;