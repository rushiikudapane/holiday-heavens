const router = require("express").Router();
const enquiryController = require("../controllers/enquiryController");

// @des Get enquiries
// @route GET /api/enquiry/showEnquiry
// @access public
router.route("/showEnquiry").get(enquiryController.getEnquiries);

// @des Make enquiries
// @route Post /api/enquiry/makeEnquiry
// @access public
router.route("/makeEnquiry").post(enquiryController.makeEnquiry);

module.exports = router;
