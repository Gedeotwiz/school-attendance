import AttendanceStatistic from "./attendance-statistic";
import { attendanceData } from "../../costant/data"; 
    import { PieChartAttendance } from "./pirChat";
import { StatusCard } from "./statusCard";
import { DashboardHearder } from "../share/header";

const  DashboardContainer = () => {
  return (
    <div>
        
            <DashboardHearder title="Dashboard" descr="Quick summary of key metrics and process of attendance in coding school" subTitle="Overview"/>
        
    <StatusCard/>
    <div className="flex py-10 gap-10">
      <AttendanceStatistic attendance={attendanceData} />
      <PieChartAttendance/>
    </div>
    
    </div>
  );
};

export default  DashboardContainer;