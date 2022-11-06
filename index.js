const express = require("express");
const app = express();
const port = 5000;

const { User } = require("./model/Users");
const bodyParser = require("body-parser");

const config = require("./config/key");

//aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//aplication/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("연결되었음"))
  .catch((err) => console.log(err, "에러남"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world 연결 연결완료");
});

app.post("/register", (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    //만약 에러가 있다면 에러 메세지와 함께 보내고
    if (err) return res.json({ success: false, err });
    //아니면 성공했다라는 걸 보낸다.
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Exmple app listening on part ${port}`));
