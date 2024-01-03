const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dataModel=require("./models/data");
const app=express();
app.use(express.json())
app.use(cors());
mongoose.connect("mongodb://localhost:27017/details");
app.post("/register",(req,res)=>{
  dataModel.create(req.body)
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
})
app.listen(3001,()=>{
  console.log("server is running");
})