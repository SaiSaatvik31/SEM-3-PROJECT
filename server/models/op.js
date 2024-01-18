const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://trustcureorg:ksksap@cluster7.hzgfnmh.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function updateDocuments() {
  try {
    await client.connect();
    const database = client.db('trustcure');
    const collection = database.collection('doc_avail');

    const documents = await collection.find().toArray();

    for (const doc of documents) {
      const availability = {};

      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach((day) => {
        availability[day] = {
          doc_name: doc.doc_name,
          speciality: doc.speciality,
          doctor_desc: doc.doctor_desc,
          availability: doc[day]
        };
      });

      await collection.updateOne(
        { _id: doc._id },
        {
          $set: {
            availability: availability
          },
          $unset: {
            Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: ''
          }
        }
      );
    }

    console.log('Documents updated successfully.');
  } finally {
    await client.close();
  }
}

updateDocuments();
