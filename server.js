const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" }); ///loading env

//route files
const bootcamps = require("./routes/bootcamps");

const app = express();

//mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is on ${process.env.NODE_ENV} and runing on port ${PORT}`);
});
