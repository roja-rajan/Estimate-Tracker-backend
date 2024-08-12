const {con}=require("./connection");
con.connect((err)=>{
    if(err) throw err;
    //var sql="create table tracker (no int auto_increment primary key, employee_id int not null,name varchar(255) not null,name_of_estimate varchar(255) not null,date_of_estimate date not null,platform varchar(255) not null,summury varchar(1000) not null, others varchar(1000) not null);"
    var sql="CREATE TABLE technology (id INT AUTO_INCREMENT PRIMARY KEY,tracker_id INT NOT NULL,technology VARCHAR(255) NOT NULL,FOREIGN KEY (tracker_id) REFERENCES tracker(no) ON DELETE CASCADE);"
    //var sql="ALTER TABLE tracker modify date_of_estimate DATE not null";
    con.query(sql,(err,data)=>{
        if(err) throw err;
        console.log("table created");
        
    })
})
