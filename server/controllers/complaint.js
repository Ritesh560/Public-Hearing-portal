const db = require("../index.js")

//import tables
const personal_details = db.personal_details
const compalintArea = db.compalintArea
const complaintDetails = db.complaintDetails
const officerLogin = db.officerLogin
const report = db.report

// 1. functions to actually input data
const registerComplaint = async (req, res) => {
  let personal = {
    name: req.body.name,
    father_name: req.body.father_name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
    adhar_number: req.body.adhar_number,
    gender: req.body.gender,
  }
  let complaint = {
    adhar_number: req.body.adhar_number,
    officer_id: req.body.officer_id,
    reference_type: req.body.reference_type,
    department: req.body.department,
    grievance_category: req.body.grievance_category,
    application_details: req.body.application_details,
  }
  let AreaComplaint = {
    adhar_number: req.body.adhar_number,
    area: req.body.area,
    distict: req.body.distict,
    tehsil: req.body.tehsil,
    block: req.body.block,
    village_panchayat: req.body.village_panchayat,
    rajsva_village: req.body.rajsva_village,
    thana: req.body.thana,
    residencial_address: req.body.residencial_address,
  }

  const Complaint = await complaintDetails.create(complaint).catch((err) => res.send(err))
  const Personal = await personal_details.create(personal).catch((err) => res.send({ complaint }))
  const Area = await compalintArea.create(AreaComplaint).catch((err) => res.send(err))

  res.send({ Personal, Complaint, Area })
  console.log({ Personal, Complaint, Area })
}

// 2. function for getting relative complaint and report
const fetchComplaintData = async (req, res) => {
  console.log("-------------------------------")

  const personalData = await personal_details
    .findAll({
      where: { adhar_number: req.body.adhar_number },
      // include: {
      //   model: complaintDetails,
      //   required: false,
      // include: {
      //   model: report,
      //   required: false,
      // },
      // },
    })
    .catch((err) => res.send(err))

  const AreaData = await compalintArea
    .findAll({
      where: { adhar_number: req.body.adhar_number },
    })
    .catch((err) => res.send(err))

  const complaintsData = await complaintDetails
    .findAll({
      where: { adhar_number: req.body.adhar_number },
    })
    .catch((err) => res.send(err))

  res.status(200).send({ personalData, AreaData, complaintsData })
  console.log()
}

// 3. function for getting complaints according to the officer
const complaintsToOfficer = async (req, res) => {
  const complaints = await complaintDetails.findAll({ where: { officer_id: req.body.officer_id } })
  res.status(200).send(complaints)
  console.log(complaints)
}

// 7. create credentials for officers
const createCredentials = async (req, res) => {
  const data = {
    userId: req.body.userId,
    password: req.body.password,
    name: req.body.name,
    officer_id: req.body.officer_id,
  }
  const credential = await officerLogin.create(data).catch((err) => res.send(err))
  res.send(credential)
}

// 4. login credentials of officers
const officerCredential = async (req, res) => {
  const credentials = await officerLogin.findOne({ where: { userId: req.body.userId, password: req.body.password } })
  res.status(200).send(credentials)
}

// 5. function for officer's report to particular complaint
const addReport = async (req, res) => {
  const info = {
    adhar_number: req.body.adhar_number,
    title: req.body.title,
    body: req.body.body,
  }
  const data = await report.create(info)
}

// 6. fetch report data
const getReport = async (req, res) => {
  const complaintInfo = await complaintDetails.findAll({ where: { id: req.body.id } }).catch((err) => res.send(err))

  const reportInfo = await report.findAll({ where: { complaint_id: req.body.complaint_id } }).catch((err) => res.send(complaintInfo))
  res.status(200).send({ complaintInfo, reportInfo })
}

module.exports = { registerComplaint, fetchComplaintData, complaintsToOfficer, officerCredential, addReport, createCredentials }

// include: [
//   {
//     model: compalintArea,
//     required: true,

//     include: [{ model: report, required: false }],
//   },
// ],
