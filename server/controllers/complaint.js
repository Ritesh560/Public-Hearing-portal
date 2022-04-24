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

  const Personal = await personal_details.create(personal).catch((err) => res.send(err))
  const Complaint = await complaintDetails.create(complaint).catch((err) => res.send(err))
  const Area = await compalintArea.create(AreaComplaint).catch((err) => res.send(err))

  res.send({ Personal, Complaint, Area })
  console.log({ Personal, Complaint, Area })
}

// 2. function for getting relative complaint and report
const fetchComplaintData = async (req, res) => {
  console.log("------------------")

  const complaintData = await personal_details
    .findOne({
      where: { adhar_number: req.body.adhar_number },
      include: [
        { model: complaintDetails, where: { adhar_number: req.body.adhar_number } },
        ,
        {
          model: compalintArea,
          where: {
            adhar_number: req.body.adhar_number,
          },
        },
        { model: report, where: { adhar_number: req.body.adhar_number } },
      ],
    })
    .catch((err) => res.send(err))

  res.status(200).send(complaintData)
  console.log(complaintData)
}

// 3. function for getting complaints according to the officer
const complaintsToOfficer = async (req, res) => {
  const complaints = await complaintDetails.findAll({ where: { officer_id: req.body.officer_id } })
  res.status(200).send(complaints)
  console.log(complaints)
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

module.exports = { registerComplaint, fetchComplaintData, complaintsToOfficer, officerCredential, addReport }
