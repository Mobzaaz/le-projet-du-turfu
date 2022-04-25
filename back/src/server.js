const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 7070;

const createAccount = require('../routes/createAccount');
const login = require('../routes/login');
const createConversation = require('../routes/createConversation');
const sendMessage = require('../routes/sendMessage')

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/createAccount', createAccount);
app.use('/login', login)
app.use('/chat', createConversation);
app.use('/sendMessage', sendMessage);

app.listen(PORT, ()=> {console.log(`Server listenning on port : ${PORT}`)});