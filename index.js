const express = require("express");
const app = express();
const port = 5000;

const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD);

const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://kim:824800@atlascluster.ct50okg.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("연결되었음"))
  .catch((err) => console.log(err, "에러남"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world 안녕하세요 반갑습니다");
});

app.listen(port, () => console.log(`Exmple app listening on part ${port}`));
