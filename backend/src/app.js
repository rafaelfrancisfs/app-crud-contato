import express from 'express';
import mongoose from 'mongoose';
import { contactRouter } from './routes/routes.js'
import cors from 'cors'


const app = express();

//conect mongoDB
(async () => {
    try {
        await mongoose.connect('mongodb://localhost/crud_contact', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao mongoDB')
    } catch (error) {
        console.log('Erro ao conectar no MongoDB' + error.message);
    }
})();


app.use(express.json());
app.use(cors());
app.use(contactRouter);




app.listen(3001, async () => {
    console.log('Backend iniciado!')
});