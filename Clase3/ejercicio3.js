const dotenv = require('dotenv')
dotenv.config();

const { MY_SALT } = process.env;

let bcrypt = requeire('bcryptjs');

