const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Game = sequelize.define(
  "Game",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    complejidad: {
      type: DataTypes.ENUM("Alta", "Media", "Baja"),
      allowNull: false,
    },
  },
  {
    tableName: "Game",
    timestamps: false,
  },
);

module.exports = Game;
