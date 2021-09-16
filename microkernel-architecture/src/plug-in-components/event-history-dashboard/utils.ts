import { nanoid } from "nanoid";

export const createUid = () => {
  return nanoid();
};

export const convertDateToUnixTime = (date: Date) => {
  return Math.round(date.getTime() / 1000);
};
