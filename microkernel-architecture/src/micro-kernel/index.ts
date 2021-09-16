import { connectToMongo } from "./persistence/mongo";
import { startServer } from "./presentation/api";
import { servePage } from "./presentation/page";

import "./voting-process/process";
import "./ranking-process/process";
import { registerAllPlugIns } from "./plug-ins";

connectToMongo();
registerAllPlugIns();
startServer();
servePage();
