const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/data');
const jwt=require('jsonwebtoken')
app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/register-user', {
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

app.listen(1337, () => {
  console.log('Server is running on port 1337');
});
