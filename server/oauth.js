const express=require('express')
const {google} =require('googleapis') 
const dotenv=require('dotenv')
const dayjs =require("dayjs") 
const {v4 : uuid} =require('uuid');
const cors=require('cors')
const app=express();

app.use(express.json());
dotenv.config({})
app.use(express.json());
const PORT=process.env.NODE_ENV||1337;
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
app.get('/google/redirect',async (req,res)=>{
  const code=req.query.code;
  const {tokens} = await oauth2Client.getToken(code)
oauth2Client.setCredentials(tokens);
})

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

    res.send({ msg: "done", events });
  } catch (error) {
    console.error('Error creating events:', error);
    res.status(500).send({ error: "Error creating events" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});