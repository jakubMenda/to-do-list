import * as Joi from 'joi';

export const taskFormValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});