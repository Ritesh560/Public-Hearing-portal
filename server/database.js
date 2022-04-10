const { Sequelize, Datatype } = require("sequelize")

const sequelize = new Sequelize("public-hearing", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

module.exports = sequelize
