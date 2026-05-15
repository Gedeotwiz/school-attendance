import type { AttendanceByDate } from "../../types";

type Props = {
  data: AttendanceByDate[];
};

const ReportTable = ({ data }: Props) => {
  const reportData = data.map((day) => {
    const present = day.records.filter((r) => r.status === "present").length;
    const absent = day.records.filter((r) => r.status === "absent").length;

    return {
      date: day.date,
      present,
      absent,
      total: present + absent,
    };
  });

  return (
    
     <>
      <div className="pt-10">
        <h2 className="text-xl font-bold dark:text-dark text-white">
          Attendance History
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="text-left p-4 dark:text-white">Date</th>
              <th className="text-left p-4 dark:text-white">Present</th>
              <th className="text-left p-4 dark:text-white">Absent</th>
              <th className="text-left p-4 dark:text-white">Ratio</th>
            </tr>
          </thead>

          <tbody>
            {reportData.map((item) => (
              <tr key={item.date} className="border-b dark:border-gray-700">

                <td className="p-4 dark:text-white">{item.date}</td>

                <td className="p-4 text-green-500 font-semibold">
                  {item.present}
                </td>

                <td className="p-4 text-red-500 font-semibold">
                  {item.absent}
                </td>

                <td className="p-4 text-blue-500 font-semibold">
                  {item.present}/{item.total}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
    </>
  );
};

export default ReportTable;