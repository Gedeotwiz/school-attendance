import express, { Router } from "express";
import { registerStudent } from "../modules/student/studentController";
import { studentExist } from "../middlewares/studentMiddleware";
import { routeBodyValidation } from "../middlewares/requestMiddlewares";
import { registerSchema } from "../validations/studentValidation";

const router: Router = express.Router();

/**
 * @swagger
 * /student:
 *   post:
 *     summary: Register a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - names
 *               - email
 *               - phone
 *               - gender
 *               - sittingLocation
 *             properties:
 *               names:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [Male, Female]
 *               sittingLocation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Validation error
 */
router.post(
  "/",
  routeBodyValidation(registerSchema),
  studentExist,
  registerStudent
);

export default router