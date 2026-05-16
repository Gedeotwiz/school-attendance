import Joi from "joi"

export const registerSchema = Joi.object({
    names:Joi.string().required()
    .messages({
        'string.base':'lastName must be string',
        'string.empty':'lastName can not be empty',
        'any.required':'lastName is required'
    }),

    email: Joi.string().email().required().messages({
    'any.required': 'email is required',
    'string.email': 'email must be a valid email',
    'string.base': 'email should be a type of string',
    'string.empty': 'email is not allowed to be empty field',
  }),

  phone: Joi.number().required().messages({
    "any.required": "phone is required",
    "number.base": "phone must be a number"
  }),

  sittingLocation: Joi.string().required().messages({
    "any.required": "location is required",
    "string.base": "location must be a string",
    "string.empty": "location must not be empty"
  }),

  gender: Joi.string().valid("Male", "Female").messages({
    "any.only": "status must be Male or Female"
  })
})