import events from "events";

interface EventEmitterEvents {
  upvotePet: (id: string) => void;
  downvotePet: (id: string) => void;
  aPetHasUpdatedPoints: () => void;
}

declare interface EventEmitter {
  on<U extends keyof EventEmitterEvents>(
    event: U,
    listener: EventEmitterEvents[U]
  ): this;

  emit<U extends keyof EventEmitterEvents>(
    event: U,
    ...args: Parameters<EventEmitterEvents[U]>
  ): boolean;
}

class EventEmitter extends events.EventEmitter {
  constructor() {
    super();
  }
}

export const eventEmitter = new EventEmitter();
