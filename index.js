const express = require("express");

const { connectDB } = require("./connection");
const urlRouter = require("./routes/url");

const URL = require("./models/url");

const PORT = 8001;
const app = express();

connectDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

//middleware
app.use(express.json());

app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server connected successfully... at port ${PORT}`);
});
