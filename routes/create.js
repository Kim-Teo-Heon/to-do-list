const express = require('express');
const router = express.Router();

const create = require('../controllers/create');

router.post('/',(req,res)=>{
    create.create_data(req,res);
    res.redirect('/');
});

module.exports = router;