"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Votes.init(
    {
      voted_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isValid(num) {
            if (num < 1 || num > 9) {
              throw new Error("Number is not valid");
            }
          },
        },
      },
    },

    {
      sequelize,
      modelName: "Votes",
      tableName: "votes",
      underscored: true,
    }
  );
  return Votes;
};
