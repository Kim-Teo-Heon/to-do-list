const read_model = require('../models/read');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        res.render('update-list',{todolist : data, page_id : req.params.page_id});
    })
}
