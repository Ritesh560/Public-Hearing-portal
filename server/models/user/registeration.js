const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const userLogin = sequelize.define("user_login", {
  mobile_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = userLogin
