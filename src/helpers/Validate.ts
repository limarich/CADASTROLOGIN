/* eslint-disable prettier/prettier */
import { Joi, celebrate } from "celebrate";
class Validate {
  teste(req, res, next) {
    console.log("testando");
    next();
  }

  // CREATE VALIDATION
  create(req, res, next) {
    celebrate(
      {
        body: Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
          confirmPassword: Joi.string().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }

  // LOGIN VALIDATION
  login(req, res, next) {
    celebrate(
      {
        body: Joi.object().keys({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }

  // SHOW  USER VALIDATION
  showUser(req, res, next) {
    celebrate(
      {
        params: Joi.object().keys({
          id: Joi.number().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }

  // UPDATE USERS VALIDATION
  update(req, res, next) {
    celebrate(
      {
        body: Joi.object().keys({
          id: Joi.number().required(),
          name: Joi.string().required(),
          email: Joi.string().email().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }

  // CHANGE PASSWORD VALIDATION
  changePassword(req, res, next) {
    celebrate(
      {
        body: Joi.object().keys({
          id: Joi.string().required(),
          password: Joi.string().required(),
          newPassword: Joi.string().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }

  // REMOVE USER VALIDATION
  remove(req, res, next) {
    celebrate(
      {
        body: Joi.object().keys({
          id: Joi.number().required(),
        }),
      },
      {
        abortEarly: false,
      }
    );
    next();
  }
}
export default new Validate();
