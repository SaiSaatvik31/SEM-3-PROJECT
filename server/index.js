const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/data');
const jwt=require('jsonwebtoken');
const admin=require('./models/doc-admin');
const booking=require('./models/patient_bookData');
const onlineBook=require('./models/online_patients');
const { MongoClient } = require('mongodb');
const {google} =require('googleapis') 
const dayjs =require("dayjs") 
const dotenv=require('dotenv')
const onlineRef=require('./models/online_ref')
const {v4 : uuid} =require('uuid');
app.use(cors());
app.use(express.json());
dotenv.config({})
let patient_id=1000;
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
let Booking_id=0;

async function initializeBookingId() {
  const database = client.db('trustcure');
  const collection = database.collection('patients-booking');

  const result = await collection.findOne();
  if (result) {
    Booking_id = parseInt(result.booking_id, 10);
  } else {
    Booking_id = 2000;
  }
}

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
  await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doctors');
  try{
    if (Booking_id === undefined) {
      await initializeBookingId();
    }

    Booking_id += 1;
    await booking.create({
      name:req.body.name,
      gender:req.body.gender,
      Age:req.body.Age,
      forWhom:req.body.forWhom,
      book_type:req.body.book_type,
      symptoms:req.body.symptoms,
      hospital:req.body.hospital,
      doct_name:req.body.doct_name,
      email:req.body.email,
      slot:req.body.slot,
      waiting_time:req.body.time,
      day:req.body.day,
      booking_id:Booking_id,
      amt:req.body.amt
    }
    )

    // const doctor = req.body.doct_name
    var day=req.body.day;
    var slotTime=req.body.slot;
    collection.updateOne({doctor_name:req.body.doct_name},{$push:{[`schedule.${day}.slot.${slotTime}.patient_list`]:{patient_name:req.body.name,waiting_time:req.body.time}}},{upsert:true})
    console.log("checking");
    
     
      
      
    
    
    const token=localStorage.getItem('token');
    res.json({status:'ok'})

  }
  catch(err){
    console.log(err)
  }
  
})


app.post('/api/docAttendance', async(req, res)=>{
  try{
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doc_avail_new');
    const doc = req.body.doc_name
    console.log(doc);
    const doct = await collection.findOne({doc_name:doc})
    console.log(doct);
    console.log("1",doct.status);
    res.json({status:doct.status})
  }
  catch(err){
    console.log(err);
  }
})
app.post('/api/advBook', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doc_avail_new');
    const day = req.body.day;
    console.log("hii")
    console.log(req.body.speciality);
    const projection = { doc_name: 1, speciality: 1, doctor_desc: 1, hospital_name: 1,amt:1, availability: 1, _id: 0 };

    const dayValues = await collection.find({speciality:req.body.speciality}, projection).toArray();

    const doc_list = dayValues.map((item) => ({
      doc_name: item.doc_name,
      speciality: item.speciality,
      doctor_desc: item.doctor_desc,
      hospital: item.hospital_name,
      availability: item.availability[day].availability,
      amt:item.amt
    }));

    return res.json({ doc_list });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});
app.post('/api/onlinePatient',async (req,res)=>{
  try{
console.log(req.body.selectedOptions.speciality)
    await onlineRef.create({
      name:req.body.selectedOptions.name,
      gender:req.body.selectedOptions.gender,
      Age:req.body.selectedOptions.Age,
      forWhom:req.body.selectedOptions.forWhom,
      book_type:req.body.selectedOptions.book_type,
      speciality:req.body.selectedOptions.speciality,
      doct_name:req.body.selectedOptions.doct_name,
      email:req.body.selectedOptions.email,
      dayName:req.body.selectedOptions.dayName,
      symptoms:req.body.selectedOptions.symptoms,
      amt:req.body.selectedOptions.amt,
      doct_list:req.body.selectedOptions.doct_list,
      hospitals_list:req.body.selectedOptions.hospitals_list,
      time_list:req.body.selectedOptions.time_list,
      rating:req.body.selectedOptions.rating,
      slot:req.body.selectedOptions.slot,
    })
  }
  catch(err){
    console.log(err);
  }
})
app.post('/api/bookOnline', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doc_avail_new');
    const day = req.body.day;
    console.log(req.body.speciality);
    const projection = { doc_name: 1, speciality: 1, doctor_desc: 1, hospital_name: 1,amt:1, availability: 1, _id: 0 };

    const dayValues = await collection.find({speciality:req.body.speciality}, projection).toArray();

    const doc_list = dayValues.map((item) => ({
      doc_name: item.doc_name,
      speciality: item.speciality,
      doctor_desc: item.doctor_desc,
      hospital: item.hospital_name,
      availability: item.availability[day].availability,
      amt:item.amt
    }));

    return res.json({ doc_list });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});
app.post('/api/patient_list',async(req,res)=>{
  try{
    console.log(req.body.userName);
    const data=await booking.find({doct_name:req.body.userName})
    console.log(data)
    return res.json({data})
  }
  catch(err){
    console.log(err)
  }
})
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
app.post('/api/virtual',async (req,res)=>{
  try{
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doctors');
    const data=await collection.find({doctor_name:req.body.value}).toArray();
    const m_data=data[0];
    return res.json({m_data});
  }
  catch(err){
    console.log(err);
  }
})
app.post('/api/cancellation',async (req,res)=>{
  try{
    const data=await booking.find({email:req.body.email});
    return res.json({data:data})
  }
  catch(err){
    console.log(err)
  }
})
app.post('/api/advBookMain',async (req,res)=>{
  try{
  console.log(req.body);
  if (Booking_id === undefined) {
    await initializeBookingId();
  }

  Booking_id += 1;
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
    day:req.body.day,
    date:req.body.date,
    booking_id:Booking_id,
    amt:req.body.amt
  })
  }

  catch(err){
    console.log(err)
  }
})
app.post('/api/onlineBookMain',async (req,res)=>{
  try{
  console.log(req.body);
  if (Booking_id === undefined) {
    await initializeBookingId();
  }

  Booking_id += 1;
  await onlineBook.create({
    name:req.body.name,
    gender:req.body.gender,
    Age:req.body.Age,
    forWhom:req.body.forWhom,
    book_type:req.body.book_type,
    hospital:req.body.hospital,
    doct_name:req.body.doct_name,
    email:req.body.email,
    time:req.body.time,
    day:req.body.day,
    date:req.body.date,
    booking_id:Booking_id,
    amt:req.body.amt
  })
  }
  catch(err){
    console.log(err)
  }
})
app.post('/api/deleteSlot', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doctors');

    await booking.deleteOne({ booking_id: req.body.id });

    const updateQuery = {
      $pull: {
        [`schedule.${req.body.day}.slot.${req.body.slot}.patient_list`]: {
          "patient_name": req.body.name,
          "waiting_time": req.body.waitingTime
        }
      }
    };

    await collection.updateOne({ doctor_name: req.body.doct_name }, updateQuery);

    res.json({ status: 'ok' });
  } catch (err) {
    console.log(err);
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
app.post('/api/refBook',async (req,res)=>{
  const data=await onlineRef.findOne({email:req.body.email})
  console.log(data);
  return res.json({data});
})
app.post('/api/profile',async (req,res)=>{
      const data=await booking.find({email:req.body.email},{_id:0,__v:0})
      return res.json({data:data})
})
app.post('/api/bookRemind',async (req,res)=>{
      const data=await booking.find({email:req.body.name}).countDocuments()
      console.log(data);
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
const calendar=google.calendar({
  version:'v3',
  auth:process.env.API_KEY,
})
console.log(process.env.CLIENT_ID)
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
console.log(process.env.CLIENT_ID);
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
const scopes = [
  'https://www.googleapis.com/auth/calendar'
];

app.get('/google',(req,res)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  const url=oauth2Client.generateAuthUrl({
    access_type:"offline",
    scope:scopes,
  })
  res.json({ url });
})
app.get('/google/redirect', async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    // Save tokens to the user session or database for later use if needed
    // Your logic to handle the tokens
    res.redirect('http://localhost:5173/bookOnline'); // Redirect to your frontend after successful authentication
  } catch (error) {
    console.error('Error getting tokens:', error);
    res.status(500).send({ error: "Error getting tokens" });
  }
});

app.post('/schedule_events', async (req, res) => {
  try {
    const participants = req.body.participants;


    const events = await Promise.all(participants.map(async participant => {
      const event = await calendar.events.insert({
        calendarId: "primary",
        auth: oauth2Client,
        conferenceDataVersion: 1,
        requestBody: {
          summary: "Scheduled Meeting",
          description: "Google Meet",
          start: {
            dateTime: dayjs(new Date()).add(1, 'day').toISOString(),
            timeZone: "Asia/Kolkata",
          },
          end: {
            dateTime: dayjs(new Date()).add(1, 'day').add(1, 'hour').toISOString(),
            timeZone: "Asia/Kolkata",
          },
          conferenceData: {
            createRequest: {
              requestId: uuid(),
            }
          },
          attendees: [participant],
        }
      });
      if (!oauth2Client.credentials || oauth2Client.credentials.expiry_date < Date.now()) {
        console.error('OAuth2 credentials expired or not available');
        res.status(401).send({ error: "OAuth2 credentials expired or not available" });
        return;
      }
      if (event.data.conferenceData && event.data.conferenceData.createRequest) {
        const meetLink = event.data.conferenceData.createRequest.conferenceSolutionKey?.type === 'hangoutsMeet' ?
          event.data.conferenceData.entryPoints[0]?.uri :
          null;

        if (meetLink) {
          console.log(`Event created for ${participant.email} with Meet link: ${meetLink}`);
          return { participant: participant.email, meetLink };
        } else {
          console.log(`Meet link not available for ${participant.email}.`);
          return { participant: participant.email, error: "Meet link not available" };
        }
      } else {
        console.log(`Conference data not available for ${participant.email}.`);
        return { participant: participant.email, error: "Conference data not available" };
      }
    }));

    res.json({ msg: "done", events });
  } catch (error) {
    console.error('Error creating events:', error);
    res.status(500).send({ error: "Error creating events" });
  }
});

app.listen(1337, () => {
  console.log('Server is running on port 1337');
});
