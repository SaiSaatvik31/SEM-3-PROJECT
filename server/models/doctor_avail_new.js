const mongoose=require('mongoose');
const doctor=new mongoose.Schema({
  doc_name : String,
  doc_id:String,
  speciality:String,
  doctor_desc:String,
  hospital_name:String,
  availability:Object,
  amt:String,
  status:String,

},{collection:'doc_avail_new'})
const model=mongoose.model('doc_avail_new',doctor)
module.exports=model