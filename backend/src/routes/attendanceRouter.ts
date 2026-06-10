import { Router } from "express";

import {
  markAttendance,
  displayAttendance,
} from "../modules/attendance/attendanceController";

import { routeBodyValidation }
  from "../middlewares/requestMiddlewares";

import { attendanceSchema }
  from "../validations/attendanceValidation";

const router = Router();

/**
 * @swagger
 * /attendance/{studentId}:
 *   post:
 *     summary: Mark student attendance
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Student MongoDB ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - Present
 *                   - Absent
 *                   - Late
 *               checkInTime:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Attendance created successfully
 */
router.post(
  "/:studentId",
  routeBodyValidation(attendanceSchema),
  markAttendance
);

/**
 * @swagger
 * /attendance:
 *   get:
 *     summary: Get all attendance
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", displayAttendance);

export default router;