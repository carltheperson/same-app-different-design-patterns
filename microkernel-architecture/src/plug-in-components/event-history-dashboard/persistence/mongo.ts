import Mongoose from "mongoose";
import { MONGO_URI } from "../constants";

let database: Mongoose.Connection;

export const connectToMongo = () =>
  new Promise((resolve, reject) => {
    const uri = MONGO_URI;

    if (database) {
      return;
    }

    Mongoose.connect(uri);

    database = Mongoose.connection;
    database.once("open", () => {
      console.log("Connected to database");
      resolve({});
    });

    database.on("error", (error) => {
      console.log("Error connecting to database");
      reject(error);
    });
  });

export const disconnectFromMongo = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
