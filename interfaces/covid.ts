import { Document } from 'mongoose';

export default interface ICovid extends Document {
    patientNumber: number;
    statePatientNumber: string;

    dateAnnounced: string;
    estimatedOnsetDate: string;

    ageBracket: number;

    gender: string;

    detectedCity: string;

    detectedDistrict: string;

    detectedState: string;

    stateCode: string;

    currentStatus: string;

    notes: string;

    contractedFromWhichPatient: string;

    nationality: string;

    transmission: string;

    statusChangeDate: string;

    source_1: string;

    source_2: string;

    source_3: string;

    backupNotes: string;

    numCases: number;
}
