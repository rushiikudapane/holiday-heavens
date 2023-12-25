const enquiryRepository = require("../repositories/enquiryRepository");

const getEnquiryService = () => {
  try {
    const response = enquiryRepository.getEnquiry();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occured while fetching enquiries" };
  }
};

const makeEnquiryService = (reqBody) => {
  const { name, email, contact, date, destination, message } = reqBody;
  try {
    enquiryRepository.makeEnquiry(
      name,
      email,
      contact,
      date,
      destination,
      message
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getEnquiryService, makeEnquiryService };
