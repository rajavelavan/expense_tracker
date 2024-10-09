const port = 5000;
const express = require('express');
const app = express();
const { connect } = require('./app/server/db/mongo');
const fs = require('fs');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

//Middlewares
app.use(express.json()); //For parsing application/json
app.use(cors(corsOptions));

require('dotenv').config();

const path = 'src/app/server/routes';
let files = fs.readdirSync(path);
// console.log(files);
files.map((route)=> app.use('/api', require(`./app/server/routes/${route}`)));

const server = () => {
  connect();
  app.listen(port, () => console.log(`server is running on port: ${port}`));
};

server();
