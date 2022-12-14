const express = require('express');
const path = require('path');
const readFile = require('../utils/fs/readData');
// const writeFile = require('../utils/fs/writeData');

const talkerRouter = express.Router();
const filePath = path.resolve('src', 'talker.json');

talkerRouter.get('/', async (req, res) => {
  const talkers = await readFile(filePath);
  if (talkers.legth === 0) return res.status(200).send([]);
  return res.status(200).send(talkers);
});

module.exports = talkerRouter;
