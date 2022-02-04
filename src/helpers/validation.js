/* eslint-disable prettier/prettier */
const { Joi } = require("celebrate");

// AUTHENTICATE CONFIGS 
const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
const createSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});
const showUserSchema = Joi.object().keys({
  id: Joi.number().required(),
});
const updateSchema = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});
const changePasswordSchema = Joi.object().keys({
  id: Joi.number().required(),
  password: Joi.string().required(),
  newPassword: Joi.string().required(),
});
const removeSchema = Joi.object().keys({
  id: Joi.number().required(),
});

module.exports = {
  loginSchema,
  createSchema,
  showUserSchema,
  updateSchema,
  changePasswordSchema,
  removeSchema,
};
