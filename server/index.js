const sequelize = require("./database.js")

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected...")
  })
  .catch((err) => {
    console.log(err)
  })

//compalint
const personal_details = require("./models/complaint/personalDetails")
const complaintDetails = require("./models/complaint/complaintDetails")
const compalintArea = require("./models/complaint/complaintArea")
//other models
const officerLogin = require("./models/officer/login")

personal_details.hasMany(complaintDetails, {
  foreignKey: "adhar_number",
  onDelete: "CASCADE",
})
complaintDetails.belongsTo(personal_details, {
  foreignKey: "adhar_number",
})

personal_details.hasOne(compalintArea, {
  foreignKey: "adhar_number",
  onDelete: "CASCADE",
})
compalintArea.belongsTo(personal_details, {
  foreignKey: "adhar_number",
})

officerLogin.hasMany(complaintDetails, {
  foreignKey: "officer_id",
  onDelete: "SET NULL",
})
complaintDetails.belongsTo(officerLogin, {
  foreignKey: "officer_id",
})

sequelize.sync({ force: true }).then(() => console.log("suceesfully syc done."))
