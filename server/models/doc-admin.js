const mongoose=require('mongoose');
const user=new mongoose.Schema({
  user_id:String,
  user_name:String,
  password:String
},{collection:'doc_admin_login'})
const model=mongoose.model('Data',user)
module.exports=model