const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../../database")

const complaintDetails = sequelize.define("complaint_details", {
  reference_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grievance_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  application_details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = complaintDetails
