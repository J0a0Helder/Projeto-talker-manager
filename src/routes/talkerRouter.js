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

talkerRouter.get('/:id', async (req, res) => {
  const talkers = await readFile(filePath);
  const { id } = req.params;
  const result = talkers.find((talker) => talker.id === Number(id));
  if (!result) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).send(result);
});

module.exports = talkerRouter;
