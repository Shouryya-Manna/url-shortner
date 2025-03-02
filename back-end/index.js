require("dotenv").config();
const express = require("express");

const path = require("path");
const cors = require("cors");
const { connectDB } = require("./connection");
const urlRouter = require("./routes/url");

const URL = require("./models/url");

const PORT = 8001;
const app = express();
app.use(cors());
app.use(express.json());

connectDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

// app.set('view engine', 'ejs');
// app.set('views',path.resolve("./views"));

//middleware




app.get("/test",async (req,res)=>{
  const allUrls = await URL.find({});
  return res.render("home",{
    urls: allUrls
  })
})

app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server connected successfully... at port ${PORT}`);
});
