import express from "express";
import { SERVER_PORT } from "../constants";

export const app = express();

app.use(express.json());

export const startServer = () => {
  app.listen(SERVER_PORT, () => {
    console.log(`Plug-in server is running on port ${SERVER_PORT}`);
  });
};
