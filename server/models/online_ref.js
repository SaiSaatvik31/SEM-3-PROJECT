const mongoose=require('mongoose');
const patient_main2=new mongoose.Schema({
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
  dayName:String,
  date:String,
  slot:Array,
  waiting_time:String,
  doct_list:Array,
  hospitals_list:Array,
  time_list:Array,
  rating:Array,
  amt:Array,
  speciality:String,
  meet_link:String
},{collection:'online_ref'})
const data=mongoose.model('patients-booking-main2',patient_main2)
module.exports=data