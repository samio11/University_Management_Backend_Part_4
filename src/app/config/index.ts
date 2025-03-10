import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
  bcrypt_salt: process.env.BCRYPT_SALT,
  default_pass: process.env.DEFAULT_STUDENT_PASS,
  NODE_ENV: process.env.NODE_ENV,
};
