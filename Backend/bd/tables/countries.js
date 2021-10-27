const { DataTypes } = require("sequelize");

//select * from "Countries" where "ID" = 'AFG';

module.exports = (sequelize) => {
  sequelize.define("Country", {
    ID: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    flag: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.STRING,
    },
  });
};
