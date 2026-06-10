import Joi from "joi";

export const attendanceSchema = Joi.object({
  status: Joi.string()
    .valid("Present", "Absent", "Late")
    .required(),

  checkInTime: Joi.string().optional(),

  comment: Joi.string().optional(),
});