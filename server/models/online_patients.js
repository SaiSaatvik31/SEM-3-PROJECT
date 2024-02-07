const mongoose=require('mongoose');
const patient_main=new mongoose.Schema({
  name:String,
  gender:String,
  Age:Number,
  forWhom:String,
  book_type:String,
  symptoms:Array,
  hospital:String,
  doct_name:String,
  email:String,
  time:String,
  day:String,
  date:String,
  slot:String,
  waiting_time:String,
  booking_id:String,
  amt:String,
  meet_link:String
},{collection:'online-patients-booking'})
const data=mongoose.model('patients-booking-main',patient_main)
module.exports=data