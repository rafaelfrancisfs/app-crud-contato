import express from 'express'
import winston from 'winston'


import { contactModel } from '../models/contact.js'

const api = express();

// montando arquivo de log

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'cadastro-de-contatos.log' }),
    ],
    format: combine(
        label({ label: 'api-cadastro-de-contato: ' }),
        timestamp(),
        myFormat
    ),
});




api.post('/contact', async (req, res) => {
    const contact = new contactModel(req.body);
    console.log("backend post: ")
    console.log(req.body)
    try {
        await contact.save();
        console.log(contact);
        logger.info(`'POST' ${contact}`);
        res.send(contact);

    } catch (err) {
        res.status(500).send(err);
        console.log(err);
        logger.error(err);
    }
});

api.get('/contact', async (req, res) => {
    const contact = await contactModel.find({});

    try {
        res.send(contact);
    } catch (err) {
        res.status(500).send(err);
    }
});


api.patch('/contact/:id', async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        logger.info(`'PATCH' ${contact}`);
        res.send(true);
    } catch (err) {
        res.status(500).send(err);
        logger.error(err);
    }
});

api.delete('/contact/:id', async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndRemove(req.params.id);
        if (!contact) {
            res.status(404).send('Contato não localizado');
        }
        logger.info(`'DELETE' ${contact}`);
        res.status(200).send(true);
    } catch (err) {
        res.status(500).send(err);
        logger.error(err);
    }
});

export { api as contactRouter }