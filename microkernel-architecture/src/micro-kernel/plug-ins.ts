import { eventEmitter, EventEmitter } from "./events";

export interface plugIn {
  name: string;
  registerPlugIn: (eventEmitter: EventEmitter) => void;
}

// Put your plug-ins here
export const plugIns: plugIn[] = [];

export const registerAllPlugIns = () => {
  plugIns.forEach((plugIn) => plugIn.registerPlugIn(eventEmitter));
};
