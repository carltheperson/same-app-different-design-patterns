import events from "events";
import { Pet } from "./persistence/models/pet";

interface EventEmitterEvents {
  upvotePet: (pet: Pet) => void;
  downvotePet: (pet: Pet) => void;
  aPetHasUpdatedPoints: () => void;
}

export declare interface EventEmitter {
  on<U extends keyof EventEmitterEvents>(
    event: U,
    listener: EventEmitterEvents[U]
  ): this;

  emit<U extends keyof EventEmitterEvents>(
    event: U,
    ...args: Parameters<EventEmitterEvents[U]>
  ): boolean;
}

export class EventEmitter extends events.EventEmitter {
  constructor() {
    super();
  }
}

export const eventEmitter = new EventEmitter();
