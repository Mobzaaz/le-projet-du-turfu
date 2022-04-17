const express = require('express');
const router = express.Router();
const Joi = require('joi');
const crypto = require('crypto');


router.post('/', async (req, res) => {

    try {
        const { createAccount } = require('../models/account');

        const schema = Joi.object({
            lastname: Joi.string().required(),
            firstname: Joi.string().required(),
            birthdate: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        });

        const { error } = schema.validate({
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            birthdate: req.body.birthdate,
            email: req.body.email,
            password: req.body.password
        })

        if(error) {
            return res.status(400).send(error.details[0].message)
        } else {
            await createAccount({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                birthdate: req.body.birthdate,
                email: req.body.email,
                password: crypto.createHash('sha256').update(req.body.password).digest('hex')
            });
    
            res.send('Compte créé !');
        }

    } catch(err) {

        if(err.message = `insert into "users" ("birthdate", "email", "firstname", "lastname", "password") values ($1, $2, $3, $4, $5) - duplicate
        key value violates unique constraint "unique_email"`) {
            res.status(400).send('Un compte utilisant ce mail existe déjà !');
        }

        res.send(err.message);
    };
    
});

module.exports = router;