//importing routers
const router = require("express").Router()

//importing related files to post and get requests
const complaint = require("./controllers/complaint")

//using router to deal with different requests
router.post("/registerComplaint", complaint.registerComplaint)
router.get("/fetchComplaintData", complaint.fetchComplaintData)
router.get("/complaintsToOfficer", complaint.complaintsToOfficer)
router.get("/officerCredential", complaint.officerCredential)
router.post("/addReport", complaint.addReport)
router.post("/createCredentails", complaint.createCredentials)
router.get("/getReport", complaint.getReport)

module.exports = router
