const { DataTypes } = require("sequelize");

//select * from "Countries" where "ID" = 'AFG';

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    nombre: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.STRING,
    },
  });
};
