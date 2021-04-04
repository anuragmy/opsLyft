import mongoose, { Schema } from 'mongoose';
import ICovid from '../interfaces/covid';

const CovidSchema: Schema = new Schema({
    patientNumber: { type: Number, required: true },
    statePatientNumber: { type: String, required: true },

    dateAnnounced: { type: String, required: true },
    estimatedOnsetDate: { type: String, required: true },

    ageBracket: { type: String, required: true },

    gender: { type: String, required: true },

    detectedCity: { type: String, required: true },

    detectedDistrict: { type: String, required: true },

    detectedState: { type: String, required: true },

    stateCode: { type: String, required: true },

    currentStatus: { type: String, required: true },

    notes: { type: String, required: true },

    contractedFromWhichPatient: { type: String, required: true },

    nationality: { type: String, required: true },

    transmission: { type: String, required: true },

    statusChangeDate: { type: Date, required: true },

    source_1: { type: String, required: true },

    source_2: { type: String, required: true },

    source_3: { type: String, required: true },

    backupNotes: { type: String, required: true },

    numCases: { type: String, required: true }
});

export default mongoose.model<ICovid>('Covid', CovidSchema);
