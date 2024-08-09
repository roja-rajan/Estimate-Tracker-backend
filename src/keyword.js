const {con}=require("../DB/connection");


const keywords=(req,res)=>{
    
    var key=req.query.keys;
    var sql="select t.*,GROUP_CONCAT(te.technology) from tracker t left join technology te on t.no=te.tracker_id where summury like ? or others like ?;"
    var word='%'+key+'%';
    con.query(sql,[word,word],(err,result)=>{
        
        if(err){
            console.log("error occured  "+err);
            res.status(500).json({data:"error occured "+err});
        }
        console.log("data given successfully");
        res.status(200).json({data:result});
        
    })
}
module.exports={keywords};
