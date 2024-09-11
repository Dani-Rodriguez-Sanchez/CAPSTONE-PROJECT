import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://daniel_rodriguez:Aa945221027@capstonedb.yjtna.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connecting the database", error);
  }
};
