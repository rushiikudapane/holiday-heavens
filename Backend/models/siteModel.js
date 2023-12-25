const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  actualPrice: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  inclusions: {
    type: Array,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  itinerary: {
    type: Array,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
  availableDate: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sites", siteModel);
