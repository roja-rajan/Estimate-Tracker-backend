var mysql=require("mysql");
const con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Moplsa123?",
        database:"timemachinedb"
}
)
module.exports={con};