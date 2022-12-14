const express = require('express');
const generateID = require('../utils/identifiers');
const emailValidation = require('../utils/validations/emailValidation');
const passwordValidation = require('../utils/validations/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  const emailOK = emailValidation(email);
  const passwordOK = passwordValidation(password);
  if (emailOK === false) { 
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  } 
  if (passwordOK === false) { 
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  } 
  const token = generateID();
  res.status(200).send({ token });
});

module.exports = loginRouter;