const mongoose=require('mongoose')
const availSchema=new mongoose.Schema({
  doc_name:String,
  speciality:String,
  doctor_desc:String,
  availability:String
})
const doc=new mongoose.Schema({  Monday:availSchema,
  Tuesday:availSchema,
  Wednesday:availSchema,
  Thursday:availSchema,
  Friday:availSchema,
  Saturday:availSchema,
  Sunday:availSchema,
})
const availability1=mongoose.model('availability1',doc,'doc_avail')
module.exports=availability1