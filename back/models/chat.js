const db = require('./client');

const createConversation = async content => {
    return await db('conversation').insert(content)
};

const sendMessage = content => {
    const result = db('message').insert(content);

    return result;
}

module.exports = {
    createConversation,
    sendMessage
};