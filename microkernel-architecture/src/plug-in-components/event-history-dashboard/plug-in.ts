import { PlugIn } from "../../micro-kernel/plug-ins";
import {
  downvoteEventHandler,
  upvoteEventHandler,
} from "./business-logic/event-handler";
import { connectToMongo } from "./persistence/mongo";
import { startServer } from "./presentation/express-app";
import { servePage } from "./presentation/page";

export const eventHistoryDashboardPlugIn: PlugIn = {
  name: "Event History Dashboard Plug-In",
  registerPlugIn: (eventEmitter) => {
    connectToMongo();
    startServer();
    servePage();
    eventEmitter.on("upvotePet", upvoteEventHandler);
    eventEmitter.on("downvotePet", downvoteEventHandler);
  },
};
