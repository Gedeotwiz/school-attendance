import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import StatusCodes from "http-status-codes";
import { handleSuccess } from "./utils/responseUtils";
import setupSwagger from "./config/swagger";

import './config/database'

dotenv.config({ quiet: true });

const app = express();

app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));

setupSwagger(app);

const port = process.env.PORT;

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome route
 *     description: Returns welcome message
 *     responses:
 *       200:
 *         description: Success
 */
app.get("/", (req, res) => {
  return handleSuccess(
    res,
    StatusCodes.OK,
    "WELCOME TO ATTENDANCE APP",
    {}
  );
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});