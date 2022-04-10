const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const officerLogin = sequelize.define("officer_login", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  officer_id: {
    type: DataTypes.INTEGER,
  },
})

module.exports = officerLogin
