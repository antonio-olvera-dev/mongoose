import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Student = new Schema({
    nombre: String,
    edad: Number,
    curso: String,
    altura: Number
});

export const student = mongoose.model('Students', Student);