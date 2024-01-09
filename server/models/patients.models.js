const mongoose = require('mongoose');
const patient = new mongoose.Schema({
    patient_id : {
        type : String,
        required : true,
        unique : true,
    },
    patient_name : {
        type : String,
        required : true,
    },
    hospital_id : {
        type : String,
        required : true,
    },
    doctor_id : {
        type : String,
        reuired : true,
    },

    appointment_id : {
        type :  String,
        reuired : true,
        unique : true
    },
    medical_history : Array,
})
const patientModel = mongoose.model('PatientModel', patient)
module.exports = patientModel
