var delete_model=require('../models/delete');

module.exports={
delete_data:function(req,res){
    delete_model.delete_data(req,function(){
      console.log("delete succes");
    });
  }//데이터 전송이 끝나면 실행
}
