const express = require("express");
const connectDb = require("./config/dbConnection");
const router = require("./routes/api");
const enquiryRouter = require("./routes/enquiry");
require("dotenv").config();

const app = express();
connectDb(); //database connection method
const PORT = process.env.PORT | 5001;

// middilewares
app.use(express.json()); //body parser for request bodies
app.use("/api", router); // for route /api router will be called
app.use("/api/enquiry", enquiryRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server started!!! Happy coding");
});

// server listening to port specified in env file
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
// console.log("test script");
