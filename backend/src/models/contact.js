import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
    // idContact,id, number
    phone: {
        type: String,
        required: false
    }
})

const contactSchema = new mongoose.Schema({
    // id, name, age
    name: {
        type: String,
        required: [true, 'Nome é obrigatorio'],
        uppercase: true
    },
    age: {
        type: Number,
        required: [true, 'Informe uma idade váliada.']
    },
    phoneNumber: [phoneSchema]
})

const contactModel = mongoose.model('contact', contactSchema, 'contact');

export { contactModel };
