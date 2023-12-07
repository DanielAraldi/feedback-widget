import dotenv from 'dotenv';

dotenv.config();

export const envs = {
  port: Number.parseInt(process.env.PORT || '3334'),
  hostMail: process.env.HOST_MAIL || 'localhost',
  portMail: Number.parseInt(process.env.PORT_MAIL || '5432'),
  userMail: process.env.USER_MAIL,
  passwordMail: process.env.PASSWORD_MAIL,
  toMail: process.env.TO_MAIL,
};
