const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, async (req, res) => {

    const { createConversation } = require('../models/chat');

    try {
        await createConversation(req.body);

        res.send('Conversation créée !');
    } catch(err) {

        res.send(err.message);
    }
})

module.exports = router;