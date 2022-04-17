const db = require('../models/client');

const createAccount = async content => {
    return await db('users').insert(content)
};

const login = async (email, password) => {
    const res = await db('users').where({
        email,
        password
    })

    return res;

};

module.exports = {
    createAccount,
    login
}