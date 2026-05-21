//1-Dotenv
require("dotenv").config();
//2-Express
const express= require("express");


//MIDDLEWARE OF JSON
const app= express();
app.use(express.json());
;
//simple logger

if(process.env.NODE_ENV==="dev"){
    app.use((req,res, next)=>{
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    });
}
//test Route
app.get("/test",(req,res)=>{
    res.json({msg:"Test Route"});
});


//DB CONNECTION
const connectionDB=require("./config/db");

connectionDB();

//PORT
const port=process.env.PORT || 8000;

//RUN SERVER
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
