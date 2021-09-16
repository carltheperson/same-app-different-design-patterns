import { app } from "./express-app";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import { getSortedEvents } from "../business-logic/event-sorting";

const templateSource = readFileSync(
  "./src/plug-in-components/event-history-dashboard/presentation/index.handlebars"
).toString();
const template = Handlebars.compile(templateSource);

export const servePage = () => {
  app.get("/", async (req, res) => {
    const sortedEvents = await getSortedEvents();

    res.send(template({ events: sortedEvents }));
  });
};
