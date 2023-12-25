const enquiryService = require("../services/enquiryService");

const getEnquiries = async (req, res) => {
  // console.log(req);
  // console.log(id);
  const enquiries = await enquiryService.getEnquiryService();
  res.status(200).send(enquiries);
};

const makeEnquiry = (req, res) => {
  const reqBody = req.body;

  const result = enquiryService.makeEnquiryService(reqBody);
  if (result) {
    res.status(200).send("Enquiry has been made, wait for callback.");
  } else {
    res.status(500).send("Error occured while making enquiring request!!!");
  }
};

module.exports = { getEnquiries, makeEnquiry };
