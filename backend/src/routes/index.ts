import express, { Router } from "express";
import studentRouter from "./studentRouter"

const router: Router = express.Router();
 router.use("/student",studentRouter)
export default router