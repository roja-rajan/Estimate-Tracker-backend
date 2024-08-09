const express=require("express");
const app=express();
const cors = require('cors');
const {save}=require("./src/save");
const {keywords}=require("./src/keyword");

app.use(cors({ origin: '*' }));
app.use(express.json());


app.post("/save",save);
app.get("/search",keywords);

const PORT=3000;
app.listen(PORT,()=>{
    console.log("server listening");
    
})
