const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    //trim : 예를 들어 ahrth la@naver.com 을입력하게 되면 띄어쓰기를 붙여주는 기능을 한다.
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
    //role은 어드민이나 관리체계를 목적으로 둔다.
  },
  image: String,
  toke: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
