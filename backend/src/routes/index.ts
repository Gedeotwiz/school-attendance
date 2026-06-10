import express, { Router } from "express";
import studentRouter from "./studentRouter"
import attendanceRouter from "./attendanceRouter"

const router: Router = express.Router();
 router.use("/student",studentRouter)
 router.use("/attendance",attendanceRouter)
export default router