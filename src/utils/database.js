const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: false,
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
});
module.exports = { db };

// const { Sequelize } = require('sequelize');
// const dotenv = require('dotenv');
// dotenv.config({ path: './config.env' });
// // Create a connection to database
// const db = new Sequelize({
//   dialect: 'postgres',
//   host: 'localhost',
//   username: 'postgres',
//   password: 'Laviera16',
//   database: 'spa',
// });
// module.exports = { db };