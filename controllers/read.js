const read_model = require('../models/read');
const path = require('path');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        res.render('todolist',{todolist : data});
    })
}

