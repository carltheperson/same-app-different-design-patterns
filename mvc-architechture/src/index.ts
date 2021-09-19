import { startServer } from "./express";
import { connectToMongo } from "./mongo";

connectToMongo();
startServer();
