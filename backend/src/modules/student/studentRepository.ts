import Student from "../../models/student";
import { IStudent } from "../../types";

const createStudent = (data:IStudent) =>{
    return Student.create(data)
}

const checkEmail = (email:string) =>{
    return Student.findOne({email})
}

export {createStudent,checkEmail}