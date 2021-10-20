const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/postroutes')

server.use('/posts', postRoutes)


server.get('/', (req, res) => res.send('Welcome to TeleClone'))

module.exports = server