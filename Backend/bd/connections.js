const { Sequelize } = require("sequelize");
require('dotenv').config();
const {DB_PASSWORD,
DB_PORT,
DB_USERNAME,
DB_NAME} = process.env

let sequelize = process.env.NODE_ENV === 'production'
? new Sequelize({
  database: DB_NAME,
  dialect:"postgres",
  host: DB_PORT,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  pool:{
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
})
: new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_PORT}/${DB_NAME}`,
  {logging: false, native: false})



/*
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`,
  {logging: false, native:false}
);
*/
const ModelCountry = require("./tables/countries.js");
const ModelActivity = require("./tables/activities.js");

ModelCountry(sequelize);
ModelActivity(sequelize);
const { Activity, Country } = sequelize.models;

Country.belongsToMany(Activity, { through: "ActivityCountry" });
Activity.belongsToMany(Country, { through: "ActivityCountry" });

module.exports = {
  ...sequelize.models,
  db: sequelize,
};
