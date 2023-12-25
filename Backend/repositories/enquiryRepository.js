const enquirySchema = require("../models/enquiryModel");

const getEnquiry = async () => {
  const response = await enquirySchema.find();
  // console.log(response);
  return response;
};

const makeEnquiry = async (
  name,
  email,
  contact,
  date,
  destination,
  message
) => {
  const newEnquiry = new enquirySchema({
    name,
    email,
    contact,
    date,
    destination,
    message,
  });

  await newEnquiry.save();
};

module.exports = { getEnquiry, makeEnquiry };
