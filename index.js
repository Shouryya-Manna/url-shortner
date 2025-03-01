const express = require("express");

const path = require("path");

const { connectDB } = require("./connection");
const urlRouter = require("./routes/url");

const URL = require("./models/url");

const PORT = 8001;
const app = express();



connectDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"));

//middleware
app.use(express.json());

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
