/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
/* eslint-disable complexity */
const Joi = require('joi');

const authorSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(18).max(140).required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
});
const validateAuthorMiddleware = (req, res, next) => {
  const { error } = authorSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validateAuthorMiddleware;