//import mongoose
const mongoose = require("mongoose");

//make connection variable
const connection = mongoose.connect(
  "mongodb+srv://daniel_rodriguez:Aa945221027@capstonedb.yjtna.mongodb.net/?retryWrites=true&w=majority"
);

//the username and password will be the same as your cluster username and password.

//export the connection variable
module.exports = {
  connection,
};
