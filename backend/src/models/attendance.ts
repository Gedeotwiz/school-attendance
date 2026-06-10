import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
  student: mongoose.Types.ObjectId;
  session: mongoose.Types.ObjectId;
  status: "Present" | "Absent" | "Late";
  checkInTime?: string;
  comment?: string;
}

const attendanceSchema = new Schema<IAttendance>(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    session: {
      type: Schema.Types.ObjectId,
      ref: "AttendanceSession",
      required: true,
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Late"],
      required: true,
    },
    checkInTime: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAttendance>(
  "Attendance",
  attendanceSchema
);