const update_model = require('../models/update-post');
const update_status_module = require('../models/update-status');

module.exports={
update_data:function(req,res){
    
    update_model.update_data(req,function(){
      res.redirect('/');
      console.log("updated success");
    })
    },//데이터 전송이 끝나면 실행

    update_status : function(req, res){
      update_status_module.update_data(req, res);
    }
}
