const dateValidation = require('../utils/validations/dateValidation');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).send({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).send({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageValidation = (req, res, next) => {
  const { age } = req.body;
  if (!age) return res.status(400).send({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).send({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
  next();
};

const wathValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const dateOK = dateValidation(watchedAt);
  if (!watchedAt) return res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
  if (!dateOK) { 
    return res.status(400).send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
   }
  next();
};

const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  const rateNumber = Number(rate);
  const rateOK = Number.isInteger(rate);
  if (rate === undefined) return res.status(400).send({ message: 'O campo "rate" é obrigatório' });
  if (!rateOK || rateNumber < 1 || rateNumber > 5) { 
    return res.status(400).send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
   }
  next();
};

module.exports = { ageValidation, nameValidation, talkValidation, wathValidation, rateValidation };