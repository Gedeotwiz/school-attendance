import Student from "../../models/student";
import { IStudent } from "../../types";

const createStudent = (data:IStudent) =>{
    return Student.create(data)
}

const checkEmail = (email:string) =>{
    return Student.findOne({email})
}

const findAllStudents = () =>{
    return Student.find()
}

const deleteStudent = (id: string) => {
  return Student.findByIdAndDelete(id);
};

const updateStudent = (id: string, data: IStudent) => {
  return Student.findByIdAndUpdate(id, data, { new: true });
};

export {createStudent,checkEmail,findAllStudents,deleteStudent,updateStudent}