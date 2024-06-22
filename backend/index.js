require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(errorHandler());
app.use("/api", router);
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // Truncate the table
    // await Pika.truncate();
    // console.log(models);
    app.listen(PORT, () => console.log("server started on port " + PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
