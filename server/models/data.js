const mongoose=require("mongoose");

const detailsSchema=new mongoose.Schema({
  userName:String,
  email:String,
  password:String
})
const detailsModel=mongoose.model("login_details",detailsSchema)
module.exports=detailsModel;