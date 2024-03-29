const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/data');
const jwt=require('jsonwebtoken');
const admin=require('./models/doc-admin');
const booking=require('./models/patient_bookData');
const { MongoClient } = require('mongodb');
app.use(cors());
app.use(express.json());
let patient_id=1000
const uri = 'mongodb+srv://trustcureorg:ksksap@cluster7.hzgfnmh.mongodb.net/trustcure';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Connecting to MongoDB
mongoose.connect('mongodb+srv://trustcureorg:ksksap@cluster7.hzgfnmh.mongodb.net/trustcure', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      patient_id:`P${patient_id}`
    });
    patient_id+=1;
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error' });
  }
});
app.post('/api/slotPage',async (req,res)=>{
  console.log(req.body);
  try{
    await booking.create({
      name:req.body.name,
      gender:req.body.gender,
      Age:req.body.Age,
      forWhom:req.body.forWhom,
      book_type:req.body.book_type,
      symptoms:req.body.symptoms,
      hospital:req.body.hospital,
      doct_name:req.body.doct_name,
      email:req.body.email
    }
    )
    const token=localStorage.getItem('token');
    console.log(token);
    res.json({status:'ok'})
  }
  catch(err){
    console.log(err)
  }
  
})
app.post('/api/advBook', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doc_avail_new');
    const day = req.body.day;
    const projection = { doc_name: 1, speciality: 1, doctor_desc: 1, hospital_name: 1, availability: 1, _id: 0 };

    const dayValues = await collection.find({}, projection).toArray();

    const doc_list = dayValues.map((item) => ({
      doc_name: item.doc_name,
      speciality: item.speciality,
      doctor_desc: item.doctor_desc,
      hospital: item.hospital_name,
      availability: item.availability[day].availability,
    }));

    return res.json({ doc_list });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.post('/api/docLogin',async (req,res)=>{

  try{
    const data=await admin.findOne({user_id:req.body.userName,password:req.body.password});
    if(data){
      const token=jwt.sign(
        {
        id:data.user_id,
        name:data.user_name
        },'Secret789'
      )
      return res.json({status:'ok',user:token})
    }
    else{
      return res.json({status:'error'})
    }
  }
  catch(error){
    console.log(error);
  }
})
// app.post('/api/advBook',async (req,res)=>{
//   try {
//     const doc=await 
//   }
// })
app.post('/api/advBookMain',async (req,res)=>{
  try{
  console.log(req.body);
  await booking.create({
    name:req.body.name,
    gender:req.body.gender,
    Age:req.body.Age,
    forWhom:req.body.forWhom,
    book_type:req.body.book_type,
    hospital:req.body.hospital,
    doct_name:req.body.doct_name,
    email:req.body.email,
    time:req.body.time,
    day:req.body.day
  })
  }

  catch(err){
    console.log(err)
  }
})
app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);
    if (user) {
      const token=jwt.sign(
        {
        name:user.name,
        email:user.email,
        id:user.patient_id
        },'Secret456'

      )
      return res.json({ status: 'ok', user: token });
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (err) {
    res.json({ status: 'error', user: "hell" });
  }
});
app.post('/api/profile',async (req,res)=>{
      const data=await booking.find({email:req.body.email},{_id:0,__v:0})
      return res.json({data:data})
})
app.get('/api/doctor',async (req,res)=>{
  const token=req.headers['x-access-token']
  try{
    const decoded=jwt.verify(token,'Secret789')
    const id=decoded.id;
    const user=await admin.findOne({user_id:id})
    return {status:'ok',id:user.user_name}
  }
  catch(err){
    console.log(err);
  }
})
app.get('/api/', async (req, res) => {
  const token=req.headers['x-access-token']
  
  try {
    const decoded=jwt.verify(token,'Secret456')
    const email=decoded.email;
  
    const user=await User.findOne({email:email})
    return {status:'ok',quote:user.quote,email:email}
    }
   catch (err) {
    console.log(err);
  }
});
app.prependOnceListener('/api/', async (req, res) => {
  const token=req.headers['x-access-token']
  
  try {
    const decoded=jwt.verify(token,'Secret456')
    const email=decoded.email;
    console.log(email);
    console.log(email);
    await User.findOne({email:email},{$set:{quote:req.body.quote}})
    return {status:'ok'}
    }
   catch (err) {
    console.log(err);
  }
});
app.prependOnceListener('/api/doctor', async (req, res) => {
  const token=req.headers['x-access-token']
  
  try {
    const decoded=jwt.verify(token,'Secret789')
    const id=decoded.id;
    await admin.findOne({user_id:id})
    return {status:'ok'}
    }
   catch (err) {
    console.log(err);
  }
});

app.listen(1337, () => {
  console.log('Server is running on port 1337');
});
