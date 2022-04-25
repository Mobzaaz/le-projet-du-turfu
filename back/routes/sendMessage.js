const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, async (req, res) => {

    const { sendMessage } = require('../models/chat');

    try {

        await sendMessage({
            sender_id: req.body.sender_id,
            receiver_id: req.body.receiver_id,
            sent_date: req.body.sent_date,
            message_content: req.body.message_content,
            conversation_id: req.body.conversation_id
        });

        res.send('Message envoyé !');

    } catch(err) {
        res.send(err.message);
    }
})

module.exports = router;