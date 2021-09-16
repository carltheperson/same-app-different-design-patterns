import { connectToMongo } from "./persistence/mongo";
import { startServer } from "./presentation/api";
import { servePage } from "./presentation/page";

import "./voting-process/process";
import "./ranking-process/process";

connectToMongo();
startServer();
servePage();
