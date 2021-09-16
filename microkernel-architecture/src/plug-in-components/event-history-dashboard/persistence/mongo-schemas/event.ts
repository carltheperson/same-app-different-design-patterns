import { Schema, model, Document } from "mongoose";
import { Event } from "../models/event";

export const eventSchema = new Schema({
  id: String,
  timeUnix: Number,
  eventMessage: String,
});

export const eventModel = model<Event & Document>("eventSchema", eventSchema);
