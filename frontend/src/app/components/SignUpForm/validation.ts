import * as Joi from 'joi';

export const signUpValidationSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi
        .string()
        .min(8)
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        .error(new Error('Password must contain at least 8 characters, at least one alphabetical and one numeric')),
    passwordRepeat: Joi.string().error(new Error('Passwords do not match')).valid(Joi.ref('password'))
});