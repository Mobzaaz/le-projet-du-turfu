const express = require("express");
const app = express();
const morgan = require('morgan');
const createAccount = require('../routes/createAccount');
const login = require('../routes/login');
const PORT = process.env.PORT || 7070;

app.use(express.json());
app.use('/createAccount', createAccount);
app.use('/login', login)
app.use(morgan('combined'));

app.listen(PORT, ()=> {console.log(`Server listenning on port : ${PORT}`)});