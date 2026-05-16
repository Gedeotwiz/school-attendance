
import { Request,Response } from "express";
import { createStudent } from "./studentRepository";
import { handleError, handleSuccess } from "../../utils/responseUtils";
import { StatusCodes } from "http-status-codes";

const registerStudent = async(req:Request,res:Response):Promise<Response | void> =>{
   try {
    const student = await createStudent(req.body)
    return handleSuccess(res,StatusCodes.CREATED,'Student successfuly registed!',student)
   } catch (error) {
     return handleError(res,StatusCodes.INTERNAL_SERVER_ERROR,`Issue is: ${error}`)
   }

}

export {registerStudent}