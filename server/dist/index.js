"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("../server/database/connection"));
var _mongoose = require("mongoose");
var _auth = _interopRequireDefault(require("./api/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const port = 8000;
_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "server is start"
  });
});
http:
//localhost:8000/auth/signup
zomato.use("/auth", _auth.default);
zomato.listen(port, () => {
  (0, _connection.default)().then(() => {
    console.log(`server is running at ${port} ||| `);
    console.log("database is connected.......");
  }).catch(error => {
    console.log("server is running but database is not connected ");
    console.log(error);
  });
});