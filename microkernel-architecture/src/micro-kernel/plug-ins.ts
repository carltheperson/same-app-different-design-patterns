import { eventHistoryDashboardPlugIn } from "../plug-in-components/event-history-dashboard/plug-in";
import { eventEmitter, EventEmitter } from "./events";

export interface PlugIn {
  name: string;
  registerPlugIn: (eventEmitter: EventEmitter) => void;
}

// Put your plug-ins here
export const plugIns: PlugIn[] = [eventHistoryDashboardPlugIn];

export const registerAllPlugIns = () => {
  plugIns.forEach((plugIn) => plugIn.registerPlugIn(eventEmitter));
};
