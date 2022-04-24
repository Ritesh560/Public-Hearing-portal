const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const report = sequelize.define("Report", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = report
