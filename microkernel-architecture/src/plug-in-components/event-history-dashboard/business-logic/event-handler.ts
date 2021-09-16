import { Pet } from "../../../micro-kernel/persistence/models/pet";
import { EventDB } from "../persistence/db";
import { convertDateToUnixTime, createUid } from "../utils";

export const upvoteEventHandler = async (pet: Pet) => {
  await EventDB.createOne({
    id: createUid(),
    timeUnix: convertDateToUnixTime(new Date()),
    eventMessage: `${pet.name} got an upvote and now has ${pet.points} points`,
  });
};

export const downvoteEventHandler = async (pet: Pet) => {
  await EventDB.createOne({
    id: createUid(),
    timeUnix: convertDateToUnixTime(new Date()),
    eventMessage: `${pet.name} got a downvote and now has ${pet.points} points`,
  });
};
