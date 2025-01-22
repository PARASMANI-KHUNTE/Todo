const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());

const Mongodb = require('./database/DbConfig');
Mongodb()


const PORT = process.env.port;

app.get('/', (req, res) => {
  res.status(200).send("Server is up....");
});

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});