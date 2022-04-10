const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const compalintArea = sequelize.define("complaint_area", {
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  District: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tehsil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  block: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  village_panchayat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rajsva_village: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thana: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  residencial_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = compalintArea
