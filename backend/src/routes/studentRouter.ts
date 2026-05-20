import express, { Router } from "express";
import { displayStudents, editStudent, registerStudent, removeStudent } from "../modules/student/studentController";
import { studentExist, studentsAvailable } from "../middlewares/studentMiddleware";
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

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Gedt all student
 *     tags: [Students]
 *     description: Retrive all student in class
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/",studentsAvailable,displayStudents)

/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     description: Delete a student using student ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Invalid student ID
 */
router.delete("/:id", removeStudent);

/**
 * @swagger
 * /student/{id}:
 *   patch:
 *     summary: Update a student
 *     tags: [Students]
 *     description: Update student information using student ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Invalid student ID
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", editStudent);

export default router