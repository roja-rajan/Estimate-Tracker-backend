const {con}=require("../DB/connection");


const keywords=(req,res)=>{
    
    var key=req.query.keys;
    var sql=`select t.employee_id,t.name,t.name_of_estimate,t.date_of_estimate,t.platform,group_concat(te.technology SEPARATOR ', ') technology,t.summury,t.others from tracker t left join technology te on t.no=te.tracker_id where t.summury like ? or t.others like ? or t.name_of_estimate like ? or t.platform like ? or t.name like ? or te.technology like ? GROUP BY 
    t.employee_id, t.name, t.name_of_estimate, t.date_of_estimate, t.platform, t.summury, t.others;`;
    //var sql="select * from tracker where summury like ? or others like ?;"
    var w='%'+key+'%';
    con.query(sql,[w,w,w,w,w,w],(err,result)=>{
        
        if(err){
            console.log("error occured  "+err);
            res.status(500).json({data:"error occured "+err});
        }
        console.log("data given successfully");
        res.status(200).json({data:result});
        
    })
}
module.exports={keywords};
