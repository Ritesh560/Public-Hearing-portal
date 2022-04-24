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
const report = require("./models/officer/report")

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

complaintDetails.hasOne(report, {
  foreignKey: "adhar_number",
  onDelete: "CASCADE",
})
report.belongsTo(complaintDetails, {
  foreignKey: "adhar_number",
})

const db = { personal_details, compalintArea, complaintDetails, officerLogin, report }

sequelize.sync({ force: false }).then(() => console.log("suceesfully syc done."))

//testcases

// .then(() => {
//   { "name": "name", "father_name": "abc", "mobile_number": 12456, "gender": "male", "email": "email.com", "adhar_number": 458985849, "reference_type": "reference", "department": "test", "grievance_category": "test", "application_details": "hello", "area": "yahi ka hun", "distict": "haryana", "tehsil": "abc", "block": "abc", "village_panchayat": "abc", "rajsva_village": "abc", "thana": "abc", "residencial_address": "acjd" }
//   const test1 = {
//     adhar_number: data.adhar_number,
//     reference_type: data.reference_type,
//     department: data.department,
//     grievance_category: data.grievance_category,
//     application_details: data.application_details,
//   }
//   console.log("-----------------------------------------------")
//   const testing = complaintDetails.create(test1).then((e) => console.log(e))
//   console.log("-----------------------------------------------")
// })

///testcases

module.exports = db
