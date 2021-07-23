import * as Joi from '@hapi/joi';
import configurationConfig from './configuration.config';

export const envConfig = {
  isGlobal: true,
  cache: true,
  load: [configurationConfig],
  validationSchema: Joi.object({
    PORT: Joi.number(),
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development')
      .required(),
    MONGODB_URL: Joi.string().required(),
    JWT_EXPIRATION: Joi.string().required(),
    HASH_SALT: Joi.number().required(),
  }),
};
