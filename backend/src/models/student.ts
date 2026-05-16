import mongoose, { Schema, Document } from "mongoose";
import { IStudent } from "../types";

export interface IStudentDocument extends IStudent, Document {}

const studentSchema = new Schema<IStudentDocument>(
  {
    names: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },

    sittingLocation: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    avator: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model<IStudentDocument>(
  "Student",
  studentSchema
);

export default Student;