import { PlugIn } from "../../micro-kernel/plug-ins";
import { connectToMongo } from "./persistence/mongo";

export const rankingDashboardPlugIn: PlugIn = {
  name: "Ranking Dashboard Plug-In",
  registerPlugIn: (eventEmitter) => {
    connectToMongo();
    eventEmitter.on("aPetHasUpdatedPoints", () => {});
  },
};
