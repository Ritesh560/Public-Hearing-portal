const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const personalDetails = sequelize.define("personal_details", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  adhar_number: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
})

module.exports = personalDetails