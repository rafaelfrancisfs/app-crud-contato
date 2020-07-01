import express from 'express'

import { contactModel } from '../models/contact.js'

const api = express();

api.post('/contact', async (req, res) => {
    const contact = new contactModel(req.body);

    try {
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(500).send(err);
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
        res.send(true);
    } catch (err) {
        res.status(500).send(err);
    }
});

api.delete('/contact/:id', async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndRemove(req.params.id);

        if (!contact) {
            res.status(404).send('Contato não localizado');
        }
        res.status(200).send(true);
    } catch (err) {
        res.status(500).send(err);
    }
});

export { api as contactRouter }