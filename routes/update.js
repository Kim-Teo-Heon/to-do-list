const express = require('express');
const router = express.Router();

const update_get = require('../controllers/update-get');
const update_post = require('../controllers/update-post');

router.get('/:page_id',(req, res, next)=>{
    update_get.read_data(req, res);
})

router.post('/:page_id',(req, res, next)=>{
    update_post.update_data(req, res);
    res.redirect('/');
})

router.post('/status/:page_id',(req, res)=>{
    update_post.update_status(req,res);
    res.redirect('/');
})

module.exports = router;
