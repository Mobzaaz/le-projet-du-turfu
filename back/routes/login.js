const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {
    
    try {
        const { login } = require('../models/account');

        const result = await login(req.body.email, crypto.createHash('sha256').update(req.body.password).digest('hex'));

        
        if(result.length === 0) {
            return res.send("Le compte n'existe pas !");
        } else {
            const token = jwt.sign(result[0], process.env.JWTKEY);
            res.send(token);
        }

    } catch(err) {
        res.send(err.message);
    };

});

module.exports = router;