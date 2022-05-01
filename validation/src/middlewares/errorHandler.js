const Joi = require('joi');
require('express-async-errors');

const errorHandler = (err, _req, res, _next) => {
  if (Joi.isError(err)) return res.status(400).json({ message: err.message });
  console.log(err);
  return res.status(500).json({ message: 'Ops, algo deu errado!' });
};

module.exports = errorHandler;