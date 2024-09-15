//import mongoose
import { connect } from "mongoose";

//make connection variable
const connection = connect(
  "mongodb+srv://daniel_rodriguez:Aa945221027@capstonedb.yjtna.mongodb.net/?retryWrites=true&w=majority"
);

//the username and password will be the same as your cluster username and password.

//export the connection variable
export default {
  connection,
};
