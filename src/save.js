const {con}=require("../DB/connection");

const save=(req,res)=>{
    const user=req.body;
    var sql="insert into tracker (employee_id,name,name_of_estimate,date_of_estimate,platform,summury,others) values(?,?,?,?,?,?,?);"
    con.query(sql,[user.employeeId,user.name,user.estimateName,user.estimateDate,user.platform,user.summary,user.otherTools],(err,result)=>{
        if (err) {
            console.log("error occured "+err);
            res.status(500).send("error occured   "+err);
          };
         //console.log(result);
         
          const trackerId = result.insertId; 
          //console.log("Inserted tracker ID:", trackerId); // Log the insert ID

        //   if (!trackerId) {
        //       console.log("Tracker ID is null or undefined");
        //       return res.status(500).send("Error: Could not retrieve tracker ID");
        //   }
        const insertTechnologySQL = `INSERT INTO technology (tracker_id, technology) VALUES ?`;
        const technologyValues = user.technology.map(tech => [trackerId, tech]);
        con.query(insertTechnologySQL, [technologyValues], (err) => {
            if (err) {
                console.log("Error occurred while inserting technologies: " + err);
                return res.status(500).send("Error occurred while inserting technologies: " + err);
            }
          
          console.log("data addedd successfully"+result);
          res.status(200).send("data added successfully");
        }
    )
}
    )
}
module.exports={save};