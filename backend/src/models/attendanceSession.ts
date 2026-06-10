import mongoose, { Schema, Document } from "mongoose";

export interface IAttendanceSession extends Document {
  title: string;
  description?: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: "Upcoming" | "Ongoing" | "Completed";
}

const attendanceSessionSchema = new Schema<IAttendanceSession>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed"],
      default: "Upcoming",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAttendanceSession>(
  "AttendanceSession",
  attendanceSessionSchema
);