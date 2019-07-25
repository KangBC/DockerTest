import Joi from '@hapi/joi';

const AddUserValidation = data => {
  const schema = {
    userid: Joi.string()
      .min(6)
      .max(20)
      .required(),
    password: Joi.string()
      .min(8)
      .max(20)
      .required(),
    phone_number: Joi.string().required()
  };
  return Joi.validate(data, schema);
};

const LoginValidation = data => {
  const schema = {
    userid: Joi.string()
      .min(6)
      .max(20)
      .required(),
    password: Joi.string()
      .min(8)
      .max(20)
      .required()
  };
  return Joi.validate(data, schema);
};

export { AddUserValidation, LoginValidation };
