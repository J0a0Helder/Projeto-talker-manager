const express = require('express');
const generateID = require('../utils/identifiers');
// const path = require('path');
// const readFile = require('../utils/fs/readData');
// const writeFile = require('../utils/fs/writeData');

const loginRouter = express.Router();
// const filePath = path.resolve('src', 'talker.json');

loginRouter.post('/', (req, res) => {
  const token = generateID();
  res.status(200).send({ token });
});

module.exports = loginRouter;