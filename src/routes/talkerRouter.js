const express = require('express');
const path = require('path');
const readFile = require('../utils/fs/readData');
const authMiddlware = require('../middlewares/authMiddlware');
const { ageValidation,
  nameValidation,
  talkValidation,
  wathValidation,
  rateValidation } = require('../middlewares/fieldValidation');
const writeFile = require('../utils/fs/writeData');

const talkerRouter = express.Router();
const filePath = path.resolve('src', 'talker.json');

talkerRouter.get('/', async (req, res) => {
  const talkers = await readFile(filePath);
  if (talkers.length === 0) return res.status(200).send([]);
  return res.status(200).send(talkers);
});

talkerRouter.get('/:id', async (req, res) => {
  const talkers = await readFile(filePath);
  const { id } = req.params;
  const result = talkers.find((talker) => talker.id === Number(id));
  if (!result) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).send(result);
});

talkerRouter.post('/', authMiddlware,
  nameValidation,
  ageValidation,
  talkValidation, wathValidation, rateValidation, async (req, res) => {
    const talkers = await readFile(filePath);
    const { name, age, talk } = req.body;
    const id = talkers.length + 1;
    const result = { id, name, age, talk };
    talkers.push(result);
    await writeFile(talkers, filePath);
    res.status(201).send(result);
});

talkerRouter.put('/:id', authMiddlware,
  nameValidation,
  ageValidation,
  talkValidation, wathValidation, rateValidation, async (req, res) => {
    const talkers = await readFile(filePath);
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const idNumber = Number(id); 
    const talkersFiltred = talkers.filter((talker) => talker.id !== idNumber);
    const result = { id: idNumber, name, age, talk };
    talkersFiltred.push(result);
    await writeFile(talkersFiltred, filePath);
    res.status(200).send(result);
});

module.exports = talkerRouter;
