import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Attendance API",
      version: "1.0.0",
      description: "Attendance Management API Documentation",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },

  apis: ["./src/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;