//process.env.NODE_ENV 는 환경변수 이다.
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
