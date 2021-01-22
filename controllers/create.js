var create_model=require('../models/create');

module.exports={
create_data:function(req,res){
    
    create_model.create_data(req,function(){
      console.log("created succes");
    });
  }//데이터 전송이 끝나면 실행
}
