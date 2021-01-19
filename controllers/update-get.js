const read_model = require('../models/read');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        console.log(data.list);
        res.render('update-list',{todolist : data});
    })
}
