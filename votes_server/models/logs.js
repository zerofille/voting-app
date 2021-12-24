"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logs.init(
    {
      url: { type: DataTypes.STRING, allowNull: false },
      json: { type: DataTypes.JSON, allowNull: false },
    },
    {
      sequelize,
      modelName: "Logs",
      tableName: "logs",
      underscored: true,
    }
  );
  return Logs;
};
