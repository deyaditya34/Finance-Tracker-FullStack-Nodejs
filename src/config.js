require("dotenv").config();

module.exports = {
  MONGODBURI: process.env.MONGODBURI,
  DB_NAME: process.env.DB_NAME,
  APP_PORT: process.env.APP_PORT,
  COLLECTION_NAMES_USERS: process.env.COLLECTION_NAMES_USERS,
  COLLECTION_NAMES_TRANSACTIONS: process.env.COLLECTION_NAMES_TRANSACTIONS,
  COLLECTION_NAMES_CATEGORIES: process.env.COLLECTION_NAMES_CATEGORIES,
  COLLECTION_NAMES_BUSINESS : process.env.COLLECTION_NAMES_BUSINESS,
  EVENT_NAMES_TRANSACTIONS_CREATED:
    process.env.EVENT_NAMES_TRANSACTIONS_CREATED,
  JWT_SECRET: process.env.JWT_SECRET,
  AUTH_TOKEN_HEADER_FIELD: process.env.AUTH_TOKEN_HEADER_FIELD,
  PASSWORD_SALT: process.env.PASSWORD_SALT,
  SSL_KEY: process.env.SSL_KEY,
  SSL_CERT: process.env.SSL_CERT
};
