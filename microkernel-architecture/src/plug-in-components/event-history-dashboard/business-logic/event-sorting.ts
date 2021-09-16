import { EventDB } from "../persistence/db";

export const getSortedEvents = async () => {
  const events = await EventDB.getAll();
  return events.sort((event1, event2) => {
    return event1.timeUnix - event2.timeUnix;
  });
};
