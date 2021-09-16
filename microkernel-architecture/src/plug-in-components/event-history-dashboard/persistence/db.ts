import { Event } from "./models/event";
import { eventModel } from "./mongo-schemas/event";

export namespace EventDB {
  export const getAll = async (): Promise<Event[]> => {
    return await eventModel.find({}).lean();
  };

  export const createOne = async (dashboardVersion: Event) => {
    await eventModel.create(dashboardVersion);
  };
}
