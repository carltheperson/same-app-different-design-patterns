import { connectToMongo } from "./persistence/mongo";
import { startServer } from "./presentation/api";
import { servePage } from "./presentation/page";

connectToMongo();
startServer();
servePage();
