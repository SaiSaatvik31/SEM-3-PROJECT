const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/data');
const jwt=require('jsonwebtoken');
const admin=require('./models/doc-admin');
app.use(cors());
app.use(express.json());

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
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error' });
  }
});
app.post('/api/docLogin',async (req,res)=>{
  console.log(req.body)

  try{
    const data=await admin.findOne({user_id:req.body.userName,password:req.body.password});
    console.log(data);
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
        email:user.email
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
    return {status:'ok',quote:user.quote}
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
